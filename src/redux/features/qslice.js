import {createSlice} from '@reduxjs/toolkit'


export const initialState={
    question_category:"",
    question_difficulty:"",
    question_type:"",
    amount_of_question:50,
    score:0
}

const quizzSlice=createSlice({
    name:'quizz',
    initialState,
    reducers:{
        setQuestionCategory: (state,action)=>{
            state.question_category=action.payload
        },
        setQuestionDifficulty: (state,action)=>{
            state.question_difficulty=action.payload
        },
        setQuestionType: (state,action)=>{
            state.question_type=action.payload
        },
        setAmoutOfQuestion: (state,action)=>{
            state.amount_of_question=action.payload
        },
        setScore: (state,action)=>{
            state.score=action.payload
        }

    },
});

export const {setAmoutOfQuestion,setQuestionCategory,setQuestionDifficulty,setQuestionType,setScore} =quizzSlice.actions

export default quizzSlice.reducer;
