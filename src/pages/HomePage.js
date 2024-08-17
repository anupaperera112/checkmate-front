import React from 'react';
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button } from "@mui/material";
import background from '../asests/images/home-page-background.avif';


export default function HomePage() {

    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh', width: '100%' }}>
            <NavBar />
            <Container maxWidth='lg'>
                <Box
                    sx={{
                        bborder: '2px solid black',
                        textAlign: 'center',
                        width: '100%',
                        height: '65vh',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        mb: 6,
                        mt: 4,
                        zIndex: 1

                    }}
                >
                    <Typography sx={{ fontSize: '80px', fontFamily: 'Roboto, sans-serif', }} gutterBottom>Organize your work</Typography>
                    <Typography sx={{ lineHeight: '.5', fontSize: '80px', fontFamily: 'Roboto, sans-serif', }} gutterBottom>and life, finally.</Typography>
                    <Typography sx={{ lineHeight: 5, fontSize: '24px', fontFamily: 'Roboto, sans-serif', }}>
                        Simplify life for both you and your team.
                        The world’s #1 task manager and to-do list app.
                    </Typography>
                    <Link to="/sign-in">
                        <Button sx={{ mt: 5, fontSize: '20px', backgroundColor: '#F24E1E', color: 'black' }} >Sign In</Button>
                    </Link>

                    <Link to="/sign-up">
                        <Button sx={{ mt: 5, ml: '10%', fontSize: '20px', backgroundColor: '#F24E1E', color: 'black' }}>Sign Up</Button>
                    </Link>
                </Box>

            </Container >

        </div>
    );
}