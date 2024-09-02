import { Container, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import sideImg from "../asests/images/ach3 1.png"
import axios from "axios";

export default function SignInPage(){

    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = () => {
        if (Password == null || UserName == null) {
            alert("enter username and password");
            return;
        } else {

            console.log(UserName + Password);

            axios.post('http://localhost:8080/api/v1/user/signIn', {
                user_name: UserName,
                user_password: Password
            }).then((response) => {
                if (response.data.statusCode === 200) {
                    alert("Sign In Successful");
                } else {
                    alert("Sign In Failed");
                }
            }).catch((error) => {
                console.log("Error", error);
            });

        }
    }

    return(
        <Container  className="sign-in-container" maxWidth="lg" sx={{ height: '100vh', display: "flex", mt: 6, mb: 4 }}>
            <Box sx={{ height: '100vh', display: "flex", ml: '10%', mt:'11.5%', width: '100%', flexDirection: "column", gap: 2}}>
                <Typography variant="h2" align="center">Sign In</Typography>
                <TextInput field="UserName" value={UserName} onChange={(e) => setUserName(e.target.value)} />
                <PasswordInput field="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" sx={{ml:'150px', mr: '150px'}} onClick={handleSubmit} >Sign in</Button>
            </Box>
            <Box>
                <img src={sideImg} alt="side" style={{ width: '613px', height: '613px', top: '330px', left: '711px' }} />
            </Box>
        </Container>
    );
}