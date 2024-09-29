import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import logo from "../asests/images/ach3 1.png";

export default function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
      {" "}
      {/* Custom background color */}
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        {/* Space between elements */}
        <img
          src={logo} // Use your image source here
          alt="Logo" // Alternative text for the image
          style={{ width: "40px", height: "40px", marginRight: "8px" }} // Set dimensions and margin
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "white" }}
        >
          CheckMate
        </Typography>
        <Stack direction="row" spacing={2}>
          <a
            href="#features"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#3f51b5",
                "&:hover": {
                  backgroundColor: "#e0e0e0", // Light grey on hover
                },
                borderRadius: "20px", // Rounded buttons
                padding: "10px 20px", // Padding for better size
              }}
            >
              Features
            </Button>
          </a>
          <a href="#AboutUs" style={{ textDecoration: "none", color: "white" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#3f51b5",
                "&:hover": {
                  backgroundColor: "#e0e0e0", // Light grey on hover
                },
                borderRadius: "20px", // Rounded buttons
                padding: "10px 20px", // Padding for better size
              }}
            >
              About Us
            </Button>
          </a>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
