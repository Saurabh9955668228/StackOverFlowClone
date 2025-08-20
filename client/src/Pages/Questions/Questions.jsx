import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar.jsx'
import RightSidebar from '../../components/RightSidebar/RightSidebar.jsx'
import QuestionsList from '../../components/HomeMainbar/QuestionsList.jsx'

const Questions = () => {
    const questionList = [
        {
            id: 1,
            votes: 3,
            noOfAnswers: 2,
            questionTitle: 'What is a function',
            questionTags: ['java', 'node js', 'react js'],
            userPosted: 'Saurabh',
            askedOn: 'jan 1',
            upVote: [],
            downVote: [],
        },
        // Add more questions as needed
    ];

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <QuestionsList questionList={questionList} />
            </div>
            <RightSidebar />
        </div>
    )
}

export default Questions
