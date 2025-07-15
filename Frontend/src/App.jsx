import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PGDetails from "./pages/PGDetails";
import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pg/:city"
          element={
            <ProtectedRoute>
              <PGDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
