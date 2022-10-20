import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestionCategory, setQuestionDifficulty, setQuestionType } from "../redux/features/qslice";

const HomeField = (props) => {
  const { label, options } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
     switch (label) {
         case "Category":
        dispatch(setQuestionCategory(e.target.value));
         break;
         case "Difficulty":
        dispatch(setQuestionDifficulty(e.target.value));
         break;
         case "Type":
        dispatch(setQuestionType(e.target.value));
        break;
        default:
        return;
    }
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="medium" fullWidth required>
        <InputLabel >{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange} >
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default HomeField;