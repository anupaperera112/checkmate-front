import { Container, Box, Typography } from "@mui/material";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sideImage from "../asests/images/sign-up-page-side.avif";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Navbar from "../components/NavBar";

import axios from "axios";

export default function SignUpPage() {
  const [Email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [ReEnterPassword, setReEnterPassword] = useState("");

  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setAgreeToTerms(event.target.checked);
  };

  const handleSubmit = () => {
    if (Password !== ReEnterPassword) {
      alert("Passwords do not match");
      return;
    } else {
      console.log(Email + UserName + Password);

      axios
        .post("http://localhost:8080/api/v1/user/register", {
          userEmail: Email,
          userName: UserName,
          userPassword: Password,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.status === 200) {
            alert("Sign Up Successful");
            navigate("/sign-in");
          } else {
            alert("Sign Up Failed");
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };

  return (
    <>
      <Navbar />
      <Container
        className="sign-up-container"
        maxWidth="lg"
        sx={{ height: "100vh", display: "flex", mt: 6, mb: 4 }}
      >
        <Box sx={{}}>
          <img
            src={sideImage}
            alt="sideImage"
            style={{ width: "200%", height: "80vh" }}
          />
        </Box>

        <Box
          sx={{
            height: "100vh",
            display: "flex",
            mt: 4,
            mb: 4,
            ml: "30%",
            width: "60%",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography
            sx={{ fontSize: "24px", fontFamily: "Roboto, sans-serif" }}
          >
            Sign Up
          </Typography>
          <TextInput
            field="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            field="UserName"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <PasswordInput
            field="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordInput
            field="Confirm Password"
            value={ReEnterPassword}
            onChange={(e) => setReEnterPassword(e.target.value)}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={agreeToTerms}
                onChange={handleCheckboxChange}
              />
            }
            label="I agree to all terms and conditions"
          />

          <button
            className=",btn btn-primary"
            disabled={!agreeToTerms}
            onClick={handleSubmit}
            style={{
              color: "black",
              fontSize: "15px",
              padding: "10px 20px",
              backgroundColor: "#3f51b5",
              borderRadius: "10px",
              borderColor: "#3f51b5",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#e0e0e0", // Light grey on hover
              },
            }}
          >
            Sign Up
          </button>
        </Box>
      </Container>
    </>
  );
}
