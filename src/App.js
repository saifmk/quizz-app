import { Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import ScoreBoard from "./pages/ScoreBoard";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import './App.css'

function App() {
  return (
    <div className="App">
      <Container maxWidth="md" maxHeight='lg' >
        <Box textAlign="center" mt={5} sx={{ border: 0,borderRadius: '1%' }}>

        <Typography variant="h2" fontWeight="bold">
                Quizzler
              </Typography>
          <Routes>
            <Route path="/" exact element={<Settings/>}/>
             
            <Route path="/questions" element={<Questions/>}/>
            <Route path="/score" element={<ScoreBoard/>}/>
          </Routes>
        </Box>
      </Container>
    </div>
  );
}

export default App;