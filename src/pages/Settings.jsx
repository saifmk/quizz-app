import { Button,Typography} from "@mui/material";
import { Box } from "@mui/system";
import {useNavigate} from 'react-router-dom'
import { XlviLoader } from "react-awesome-loaders";
import SelectField from "../components/HomeField";
import TextFieldComp from "../components/TextField";
import useAxios from "../redux/services/axiosCoreApi";

const Settings = () => {
    const { response, error, loading } = useAxios({ url: "/api_category.php" });

const Navigate =useNavigate()

  if (loading) {
    return (
     <div style={{margin:'140px'}}>

  <XlviLoader
    boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
    desktopSize={"250px"}
  />
    </div>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {

    e.preventDefault();
    Navigate('/questions')
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options={difficultyOptions} label="Difficulty" />
      <SelectField options={typeOptions} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="outlined" type="submit" >
          Get Started
        </Button>
      </Box>

    </form>
  );
};

export default Settings;