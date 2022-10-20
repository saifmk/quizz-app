import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import useAxios from "../redux/services/axiosCoreApi";
import { useNavigate } from "react-router-dom";
import { setScore } from "../redux/features/qslice";
import Stack from '@mui/material/Stack';
import { BoltLoader } from "react-awesome-loaders";
import './questions.css'
import useTimeout from "../components/timer";
import { useRef } from "react";
import { flushSync } from "react-dom";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {

 const {question_category,question_difficulty,question_type,amount_of_question,score } = useSelector((state) => state.quizz);
console.log(question_category,question_difficulty,question_type,amount_of_question);
  const dispatch = useDispatch();
  const Navigate= useNavigate()

  let apiUrl = `/api.php?amount=${amount_of_question}`;
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  console.log(response);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedOption,setSelectedOptions] = useState(null)
  const [answer,setAnswer] = useState()


    // useTimeout(()=>[questionIndex + 1],3000)
const timer= useRef(null)
const progressBar =useRef(null)

function gotoNextQuestion(){
  if(timer.current){
    clearTimeout(timer.current)
  }
  flushSync(()=>{
    setAnswer(selectedOption)
  })
  setSelectedOptions(null)
}

  

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice( getRandomInt(question.incorrect_answers.length),0,question.correct_answer);
      setOptions(answers);
    }
    // progressBar.current.classList.remove('active');
    // setTimeout(()=>{
    //  progressBar.current.classList.add('active')
    // },0)
    // timer.current = setTimeout(gotoNextQuestion,5000)
    // return gotoNextQuestion;
  }, [response, questionIndex]);

  if (loading) {
    return (
      <div style={{margin:'280px'}}>

        <BoltLoader
          className={"loaderbolt"}
          boltColor={"#6366F1"}
          backgroundBlurColor={"#E0E7FF"}
        />
      </div>
  
    );
  }
  const question = response.results[questionIndex];
  const handleClickAnswer = (e) => {

    if (e.target.textContent === question.correct_answer) {
      dispatch(setScore(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      Navigate("/score");
    }
  };
 

   return (
      <Box
      >
        <div className="progress-bar" ref={progressBar}></div>
        <Typography variant="h5" marginBottom={5}>Questions {questionIndex + 1}</Typography>
        <Typography mt={5} variant='h6'>
          {decode(response.results[questionIndex].question)}
        </Typography>
        {options.map((data, id) => (
          <Box mt={2} key={id} fullwidth  >
            <Stack>
              
            <Button onClick={handleClickAnswer} variant="outlined" size="large" className={id === selectedOption ? 'option active' : 'option'} >
              {decode(data)}
            </Button>
            </Stack>
          </Box>
        ))}
        <Box mt={5}>
          Score: {score} / {response.results.length}
        </Box>
      </Box>
   );
};

export default Questions;