import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import background from "../asests/images/home-page.jpg"; // Ensure you have the correct background path

export default function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        minHeight: "100vh",
        width: "100%",
        position: "relative", // Set position for the overlay effect
      }}
    >
      <NavBar />
      <Container maxWidth="lg">
        <Box
          sx={{
            border: "2px solid rgba(0, 0, 0, 0.1)", // Lighter border
            textAlign: "center",
            width: "100%",
            height: "65vh",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
            borderRadius: "10px",
            mb: 6,
            mt: 4,
            zIndex: 1,
            display: "flex", // Flexbox for centering
            flexDirection: "column", // Column layout
            justifyContent: "center", // Center vertically
            alignItems: "center", // Center horizontally
          }}
        >
          <Typography
            sx={{
              fontSize: "80px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold", // Bold title
              color: "#3f51b5", // Main color for the title
              mb: 2, // Margin-bottom
            }}
            gutterBottom
          >
            Organize your work
          </Typography>
          <Typography
            sx={{
              lineHeight: ".5",
              fontSize: "80px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold", // Bold second line
              color: "#3f51b5", // Main color
            }}
            gutterBottom
          >
            and life, finally.
          </Typography>
          <Typography
            sx={{
              lineHeight: 1.5,
              fontSize: "24px",
              fontFamily: "Roboto, sans-serif",
              color: "#555", // Darker text color for readability
              maxWidth: "600px", // Limit width for better readability
            }}
          >
            Simplify life for both you and your team. The world’s #1 task
            manager and to-do list app.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Link to="/sign-in">
              <Button
                sx={{
                  fontSize: "20px",
                  backgroundColor: "#F24E1E",
                  color: "white",
                  "&:hover": { backgroundColor: "#D43E1B" }, // Darker hover effect
                  mr: 2, // Margin right for spacing
                }}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button
                sx={{
                  fontSize: "20px",
                  backgroundColor: "#F24E1E",
                  color: "white",
                  "&:hover": { backgroundColor: "#D43E1B" }, // Darker hover effect
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Features Section */}
        <Box
          ID="features"
          sx={{
            border: "2px solid rgba(0, 0, 0, 0.1)", // Lighter border
            textAlign: "center",
            width: "100%",
            height: "65vh",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
            borderRadius: "10px",
            mb: 6,
            mt: 4,
            zIndex: 1,
            display: "flex", // Flexbox for centering
            flexDirection: "column", // Column layout
            justifyContent: "center", // Center vertically
            alignItems: "center", // Center horizontally
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#3f51b5",
              textTransform: "uppercase",
            }}
          >
            Features
          </Typography>
          <List sx={{ maxWidth: "800px", mx: "auto", padding: 0 }}>
            <ListItem sx={{ justifyContent: "center" }}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#3f51b5" }} />
              </ListItemIcon>
              <Typography
                sx={{ color: "#555", lineHeight: 1.6, fontSize: "18px" }}
              >
                Task prioritization to focus on what matters most.
              </Typography>
            </ListItem>

            <ListItem sx={{ justifyContent: "center" }}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#3f51b5" }} />
              </ListItemIcon>
              <Typography
                sx={{ color: "#555", lineHeight: 1.6, fontSize: "18px" }}
              >
                Notifications and reminders to keep you on track.
              </Typography>
            </ListItem>
            <ListItem sx={{ justifyContent: "center" }}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#3f51b5" }} />
              </ListItemIcon>
              <Typography
                sx={{ color: "#555", lineHeight: 1.6, fontSize: "18px" }}
              >
                Integrations with other productivity tools you love.
              </Typography>
            </ListItem>
          </List>
        </Box>

        {/* About Section */}

        <Box
          ID="AboutUs"
          sx={{
            border: "2px solid rgba(0, 0, 0, 0.1)", // Lighter border
            textAlign: "center",
            width: "100%",
            height: "65vh",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
            borderRadius: "10px",
            mb: 6,
            mt: 4,
            zIndex: 1,
            display: "flex", // Flexbox for centering
            flexDirection: "column", // Column layout
            justifyContent: "center", // Center vertically
            alignItems: "center", // Center horizontally
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#3f51b5",
              textTransform: "uppercase",
            }} // Uppercase for a bold look
          >
            About Us
          </Typography>
          <Typography
            sx={{
              color: "#555",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6, // Increased line height for better readability
              fontSize: "18px", // Slightly larger font size for better legibility
              textAlign: "justify", // Justified text for a neat look
            }}
          >
            We are dedicated to helping you manage your tasks and improve
            productivity. Our application provides you with the tools you need
            to stay organized, whether you’re working alone or as part of a
            team. With user-friendly features, we ensure that managing tasks
            becomes a seamless experience, empowering you to focus on what truly
            matters.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
