import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Sepak Takraw</h2>
      <ul>
        <li>
          <Link to="/dashboard" className="block p-3 hover:bg-gray-700 rounded">Dashboard</Link>
        </li>
        <li>
          <Link to="/matches" className="block p-3 hover:bg-gray-700 rounded">Matches</Link>
        </li>
        <li>
          <Link to="/events" className="block p-3 hover:bg-gray-700 rounded">Events</Link>
        </li>
        <li>
          <Link to="/profile" className="block p-3 hover:bg-gray-700 rounded">Profile</Link>
        </li>
        <li>
          <Link to="/" className="block p-3 hover:bg-gray-700 rounded">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;