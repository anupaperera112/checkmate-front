import React from "react";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const Header = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
                        <span >To</span>
                        <span style={{color:"white"}}> - Do List</span>
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <NotificationsNoneIcon/>
                        <CalendarMonthIcon/>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;