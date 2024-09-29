import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TaskCard from "../components/TaskCard";

function DemoPageContent({ pathname }) {
  const [taskIDs, setTaskIDs] = useState([]);

  const navigate = useNavigate();

  const extractCategoryFromPathname = (pathname) => {
    const parts = pathname.split("/");
    return parts[parts.length - 1];
  };

  const { user_id } = useParams();
  const category = extractCategoryFromPathname(pathname);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/taskList/${user_id}/${category}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the JWT token to the Authorization header
        },
      })
      .then((response) => {
        console.log(response.data);
        setTaskIDs(response.data.data);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("You are not sign in. Please sign in to view your tasks.");
        navigate("/sign-in");
      });
  }, [user_id, category, token, navigate]);

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography
          variant="h4" // Use a larger font size for emphasis
          component="h2" // Semantically appropriate heading
          sx={{
            fontWeight: "bold", // Make the text bold
            color: "White", // Change color to primary color
            textTransform: "uppercase", // Uppercase letters for a clean look
            letterSpacing: "1.5px", // Add letter spacing for readability
            mb: 1, // Margin-bottom for spacing
          }}
        >
          {`${category} TO DOs`}
        </Typography>
        <Typography
          variant="subtitle1" // Use a smaller variant for additional context
          color="text.secondary" // Use a secondary text color
          sx={{
            fontStyle: "italic", // Italicize for style
          }}
        >
          Keep track of your tasks efficiently!
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {taskIDs.map((task_id, index) => (
          <Grid item key={index} xs={2} sm={4} md={4}>
            <TaskCard task_id={task_id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default DemoPageContent;
