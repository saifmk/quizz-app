import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { setAmoutOfQuestion } from "../redux/features/qslice";

const TextFieldComp = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setAmoutOfQuestion(e.target.value));
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small" color="secondary">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Amount of Questions"
          type="number"
          size="large"
          required
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;