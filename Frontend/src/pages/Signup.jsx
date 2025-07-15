import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({
    name: '', email: '', password: '',
    phone: '', gender: '', college_name: ''
  });

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/signup', form);
      alert('Signup successful!');
      navigate('/home'); // ✅ redirect after signup
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <select
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            placeholder="College Name"
            value={form.college_name}
            onChange={(e) => setForm({ ...form, college_name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
