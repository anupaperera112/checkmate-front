import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </Router>


  );
}

export default App;
