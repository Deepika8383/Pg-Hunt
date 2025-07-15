import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

function PGDetails() {
  const { city } = useParams();
  const [pgs, setPgs] = useState([]);

  useEffect(() => {
    const fetchPGs = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`/pgs/${city}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPgs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPGs();
  }, [city]);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">PGs in {city}</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {pgs.map(pg => (
          <div key={pg.property_id} className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div>
              <h2 className="text-2xl font-semibold text-blue-700">{pg.name}</h2>
              <p className="text-gray-600 mt-1">{pg.address}</p>
              <p className="text-sm text-gray-500 mt-1 capitalize">Gender: {pg.gender}</p>
              <p className="text-lg font-medium text-green-700 mt-2">Rent: ₹{pg.rent}/month</p>
            </div>

            <div>
              <p className="text-gray-800 text-sm">{pg.description}</p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Amenities</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                {pg.amenities.map((a, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="bg-blue-100 px-2 py-1 rounded text-blue-600 text-xs">{a.icon}</span>
                    <span>{a.name} <span className="text-gray-400 text-xs">({a.type})</span></span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Ratings</h3>
              <ul className="text-sm space-y-1">
                <li>🧼 Cleanliness: <strong>{pg.rating_clean}</strong></li>
                <li>🍽️ Food: <strong>{pg.rating_food}</strong></li>
                <li>🔒 Safety: <strong>{pg.rating_safety}</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Testimonials</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {pg.testimonials.map((t, i) => (
                  <li key={i} className="border-l-4 border-blue-500 pl-3 italic">
                    “{t.content}” — <strong>{t.user_name}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PGDetails;
