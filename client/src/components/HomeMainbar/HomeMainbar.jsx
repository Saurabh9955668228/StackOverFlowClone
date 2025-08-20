import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'

import './HomeMainbar.css'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {
  const location  = useLocation()
  const user = 1;
    const navigate = useNavigate()

  var questionList = [{
    _id:1,
    upVotes:3,
    downVotes:2,
    noOfAnswers:2,
    questionTitle:"What is a function",
    questionBody: "It meant to be",
    questionTags:["java","node js","react js","mongodb", "python","javascript","express","html","css",],
    userPosted: "Saurabh",
    userId:1,
    askedOn:" jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answeredOn:"jan 2",
      userId:2,
    }]
  },{
    _id : 2,
    votes : 0,
    noOfAnswers : 0,
    questionTitle : "What is a function",
    questionBody : "It meant to be",
    questionTags : ["java","python","node js","react js",],
    userPosted : "Saurabh",
    askedOn : "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answeredOn:"jan 2",
      userId:2,
    }]
  },{
    _id : 3,
    votes : 1,
    noOfAnswers :0,
    questionTitle : "What is a function",
    questionBody : "It meant to be",
    questionTags : ["javascript","python","node js"],
    userPosted : "Saurabh",
    askedOn : "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answeredOn:"jan 2",
      userId:2,
    }]
  }]

  

    

      const checkAuth = () => {
        if (user === null){
          alert("login or signup to ask a question")
        navigate('/Auth')

        }else{
          navigate('/AskQuestion')
        }
      }


  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname ==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionList ===null ?
          <h1>Loding...</h1> :
          <>
          <p>{ questionList.length } questions</p>
          <QuestionsList questionList={questionList}/>
          
          </>
        }
      </div>
      
    </div>
  )
}

export default HomeMainbar
