import * as api from '../api'

// Action to ask a question
export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postquestion(questionData)
        dispatch({ type: "POST_QUESTION", payload: data })
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

// Action to fetch all questions
export const fetchAllQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.getallquestions()
        dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data })
    } catch (error) {
        console.log(error)
    }
}

// Action to delete a question
export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        await api.deletequestion(id)
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

// Action to vote on a question
export const voteQuestion = (id, value) => async (dispatch) => {
    try {
        await api.votequestion(id, value)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

// Action to post an answer
export const postAnswer = (answerData) => async (dispatch) => {
    try {
        const { id, noOfAnswers, answerBody, userId, userAnswered } = answerData
        const { data } = await api.postanswer(id, noOfAnswers, answerBody, userAnswered, userId)
        dispatch({ type: "POST_ANSWER", payload: data })
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

// Action to delete an answer
export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
    try {
        await api.deleteanswer(id, answerId, noOfAnswers)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}
