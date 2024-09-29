import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";


export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>Todo App</Typography>
                <Stack direction="row" spacing={2}>
                    <Button variant="h6" >Features</Button>
                    <Button variant="h6">About Us</Button>
                </Stack>
            </Toolbar>
        </AppBar>

    );
}


