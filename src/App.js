import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import TaskDetails from "./pages/TaskDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/task-details" element={<TaskDetails />} />
      </Routes>
    </Router>


  );
}

export default App;
