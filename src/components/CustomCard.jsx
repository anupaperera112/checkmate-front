import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import taskcardimage from "../asests/images/task-card-todo.jpg";



const CustomCard = ({task}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={taskcardimage}
        alt="Card Image"
        sx={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div" gutterBottom>
          {task.taskTitle || "Dummy To Do"}
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          fontWeight="bold"
          gutterBottom
        >
         {task.taskStartDate
        ? "Start date: " + task.taskStartDate.slice(0, 10)
        : "Start date: 2024-01-07"}
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          fontWeight="bold"
          gutterBottom
        >
                {task.taskEndDate
        ? "End date: " + task.taskEndDate.slice(0, 10)
        : "End date: 2024-07-01"}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007bff",
            "&:hover": { backgroundColor: "#0056b3" },
            borderRadius: "20px",
            padding: "10px 20px",
          }}
        >
          {task.taskStatus ? task.taskStatus : "Pending"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;

{
  /* <Card variant="outlined">
  <Box sx={{ padding: 2 }}>
    <Typography variant="h6">{task.taskTitle || "Task Title"}</Typography>
    <Typography variant="body2">
      {task.taskStartDate
        ? "Start date: " + task.taskStartDate.slice(0, 10)
        : "Task Description"}
    </Typography>
    <Typography variant="body2">
      {task.taskEndDate
        ? "End date: " + task.taskEndDate.slice(0, 10)
        : "Task Description"}
    </Typography>
  </Box>
</Card>; 
*/
}
