import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAmoutOfQuestion,setScore } from "../redux/features/qslice";

const ScoreBoard = () => {

const {score} = useSelector((state)=>state.quizz)
const Navigate= useNavigate()
const disptach = useDispatch()
  const handleBackToSettings = () => {
    disptach(setScore(0));
    disptach(setAmoutOfQuestion(50));
    Navigate('/')
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score:{score}
      </Typography>
      <Button variant="outlined" onClick={handleBackToSettings}>
        back to home!
      </Button>
    </Box>
  );
};

export default ScoreBoard;