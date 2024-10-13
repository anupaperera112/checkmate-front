import { Container, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import sideImg from "../asests/images/ach3 1.png";
import axios from "axios";
import Navbar from "../components/NavBar";

export default function SignInPage() {
  const [UserEmail, setUserEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!UserEmail?.trim() || !Password?.trim()) {
      alert("Please enter a username and password");
      return;
    }

    console.log(`UserEmail: ${UserEmail.trim()}, Password: ${Password.trim()}`);

    axios
      .post(
        "http://localhost:8080/api/v1/user/sign-in",
        {
          userEmail: UserEmail,
          userPassword: Password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.status === 200) {
          const { token, userId } = response.data.data; // Assume userId is returned by your backend
          console.log("Token", token);
          console.log("User ID", userId);
          localStorage.setItem("authToken", token);
          navigate(`/task-list/${userId}`); // Dynamically navigate to user's task list
          console.log("Sign In Successful");
          alert("Sign In Successful");
        } else {
          alert("Sign In Failed");
        }
      })
      .catch((error) => {
        console.log("Error", error);
        alert("An error occurred during sign-in. Please try again.");
      });
  };
  return (
    <>
      <Navbar />
      <Container
        className="sign-in-container"
        maxWidth="lg"
        sx={{ height: "100vh", display: "flex", mt: 6, mb: 4 }}
      >
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            ml: "10%",
            mt: "11.5%",
            width: "100%",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h2" align="center">
            Sign In
          </Typography>
          <TextInput
            field="UserName"
            value={UserEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <PasswordInput
            field="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ ml: "150px", mr: "150px" }}
          >
            Sign In
          </Button>
        </Box>
        <Box>
          <img
            src={sideImg}
            alt="side"
            style={{
              width: "613px",
              height: "613px",
              top: "330px",
              left: "711px",
            }}
          />
        </Box>
      </Container>
    </>
  );
}
