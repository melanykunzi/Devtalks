import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import { RightBar } from "./components/RightBar";
import { Sidebar } from "./components/Sidebar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";
export default function App(){
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme ({
    palette:{
      mode: mode
    }
  })
  return (
      <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar></Navbar>
        <Stack direction='row' spacing={2} justifyContent='space-evenly'>
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <RightBar/>
        </Stack>
        <Add/>
      </Box>
      </ThemeProvider>
  )
}