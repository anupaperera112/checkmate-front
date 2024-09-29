import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
<<<<<<< HEAD
import TaskListPage from "./pages/TaskListPage";
=======
import DashBoard from "./pages/DashBoard";
>>>>>>> 31667f62d2fe1b70522182155862f96090e37798
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
<<<<<<< HEAD
        <Route path="/task-list/:user_id" element={<TaskListPage />} />
=======
        <Route path="/dash-board" element={<DashBoard />} />
>>>>>>> 31667f62d2fe1b70522182155862f96090e37798
      </Routes>
    </Router>


  );
}

export default App;
