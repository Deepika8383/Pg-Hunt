// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    navigate(`/pg/${city}`);
  };

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-semibold mb-6">Select a City</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["delhi", "mumbai", "Bengaluru", "Hyderabad"].map((city) => (
          <button
            key={city}
            onClick={() => handleCityClick(city)}
            className="p-6 bg-gray-100 hover:bg-gray-200 rounded shadow"
          >
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
