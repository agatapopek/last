import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 


export default function Layout(){
    return(
        <>
        <Header/>
        <Container sx={{
            marginY: 5}}>
            <Grid container spacing={5}>
            <Outlet/>
            </Grid>
        </Container>
        <Footer/>
        </>
    )
}