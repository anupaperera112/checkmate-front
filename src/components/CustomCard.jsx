import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventIcon from "@mui/icons-material/Event";
import taskcardimage from "../asests/images/task-card-todo.jpg";

const CustomCard = ({ task }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "success";
      case "in progress":
        return "warning";
      case "pending":
      default:
        return "info";
    }
  };

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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={taskcardimage}
        alt="Task Card Image"
        sx={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
      />
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h6" component="div" gutterBottom noWrap>
          {task.taskTitle || "Dummy To Do"}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <CalendarTodayIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {task.taskStartDate
              ? new Date(task.taskStartDate).toLocaleDateString()
              : "2024-01-07"}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <EventIcon color="secondary" fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {task.taskEndDate
              ? new Date(task.taskEndDate).toLocaleDateString()
              : "2024-07-01"}
          </Typography>
        </Box>
        <Box sx={{ mt: "auto" }}>
          <Chip
            label={task.taskStatus || "Pending"}
            color={getStatusColor(task.taskStatus)}
            sx={{ fontWeight: "bold", width: "100%" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
