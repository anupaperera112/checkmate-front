import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import CustomCard from "./CustomCard";

export default function TaskCard({ task_id }) {
  const [task, setTask] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/task/getTask/${task_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setTask(response.data.data); // Make sure the data path is correct
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching task:", error);
      });
  }, [task_id]); // Include task_id as a dependency

  return (
    <Box sx={{ minWidth: 275, marginLeft: 5, marginTop: 5, marginRight: 5 }}>
      <CustomCard task={task} />
    </Box>
  );
}
