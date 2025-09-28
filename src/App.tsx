import { Box, CssBaseline } from "@mui/material";
import { Outlet, ScrollRestoration } from "react-router";
import NavBar from "./components/layout/navBar";
import './index.css'


const App = () => {

  return (
    <>
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh', minWidth: "100vw", position: "fixed", top: 0, zIndex: "-1" }}></Box>
    <Box sx={{ textAlign: 'center', minHeight: '100vh', minWidth: "100vw" }}>
      <ScrollRestoration />
      <CssBaseline />
      <NavBar />
      <Box maxWidth='xl' sx={{ pt: 8, height: "100vh" }}>
        <Outlet />
      </Box>
    </Box>
    </>
  )
}

export default App
