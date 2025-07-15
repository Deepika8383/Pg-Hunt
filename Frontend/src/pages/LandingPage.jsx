// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to phHunt</h1>
      <p className="mb-6 text-center max-w-md">
        Find your perfect PG accommodation in Delhi, Mumbai, and Bangalore. 
        Discover verified listings with ease!
      </p>
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded">Login</Link>
        <Link to="/signup" className="px-4 py-2 bg-gray-800 text-white rounded">Signup</Link>
      </div>
    </div>
  );
};

export default LandingPage;
