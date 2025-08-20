import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'


import LeftSidebar from '../../components/LeftSidebar/LeftSidebar.jsx'
import RightSidebar from '../../components/RightSidebar/RightSidebar.jsx'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar.jsx'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'

const QuestionDetails = () => {
    const navigate = useNavigate(); 
    // Your component logic here
    const { id } = useParams()
    const questionsList = useSelector(state => state.questionsReducer)
    
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const [answer, setAnswer] = React.useState('')
    
    const handlePostAns = (e, answerLength) => {
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question')
            return
        }
        if(answer === ''){
            alert('Enter an answer before submitting')
            return
        }
        dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: answer, userAnswered: User.result.name, userId: User.result._id }))
        setAnswer('')
    }
    
    const handleShare = () => {
        // Copy URL to clipboard
        navigator.clipboard.writeText(window.location.href)
        alert('URL copied to clipboard')
    }
    
    const handleDelete = () => {
        dispatch(deleteQuestion(id, navigate))
    }
    
    const handleUpVote = () => {
        if(User === null){
            alert('Login or Signup to vote')
            return
        }
        dispatch(voteQuestion(id, 'upVote', User.result._id))
    }
    
    const handleDownVote = () => {
        if(User === null){
            alert('Login or Signup to vote')
            return
        }
        dispatch(voteQuestion(id, 'downVote', User.result._id))
    }
    
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                {
                    questionsList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        {
                            questionsList.data.filter(question => question._id === id).map(question => (
                                <div key={question._id}>
                                    <section className='question-details-container'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className="question-votes">
                                                <img src={upvote} alt="upvote" width='18' onClick={handleUpVote} />
                                                <p>{question.upVote.length - question.downVote.length}</p>
                                                <img src={downvote} alt="downvote" width='18' onClick={handleDownVote} />
                                            </div>
                                            <div style={{width: "100%"}}>
                                                <p className='question-body'>{question.questionBody}</p>
                                                <div className="question-details-tags">
                                                    {
                                                        question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question-actions-user">
                                                    <div>
                                                        <button type='button' onClick={handleShare}>Share</button>
                                                        {
                                                            User?.result?._id === question?.userId && (
                                                                <button type='button' onClick={handleDelete}>Delete</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div>
                                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                                        <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                            <Avatar backgroundColor="orange" px='8px' py='5px' borderRadius="4px">
                                                                {question.userPosted.charAt(0).toUpperCase()}
                                                            </Avatar>
                                                            <div>
                                                                {question.userPosted}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} Answers</h3>
                                                <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                                            </section>
                                        )
                                    }
                                    <section className='post-ans-container'>
                                        <h3>Your Answer</h3>
                                        <form onSubmit={(e) => { handlePostAns(e, question.answer.length) }}>
                                            <textarea name="" id="" cols="30" rows="10" value={answer} onChange={e => setAnswer(e.target.value)}></textarea><br />
                                            <input type="submit" className='post-ans-btn' value='Post Your Answer'/>
                                        </form>
                                        <p>
                                            Browse other Question tagged
                                            {
                                                question.questionTags.map((tag) => (
                                                    <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                                ))
                                            } or 
                                            <Link to='/AskQuestion' style={{textDecoration: "none", color:"#009dff"}}> ask your own question.</Link>
                                        </p>
                                    </section>
                                </div>
                            ))
                        }
                    </>
                }
            </div>
            <RightSidebar />
        </div>
    )
}

export default QuestionDetails
