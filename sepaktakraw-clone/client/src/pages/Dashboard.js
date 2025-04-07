import React from 'react';
import { useAuth } from '../context/AuthContext';
import DataCard from '../components/DataCard';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name || 'Guest'}!</h1>
        <p className="mt-2">Track your sepak takraw activities and statistics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DataCard 
          title="Upcoming Matches" 
          value="12" 
          icon="⚽" 
          color="bg-blue-100 text-blue-800"
        />
        <DataCard 
          title="Team Members" 
          value="24" 
          icon="👥" 
          color="bg-green-100 text-green-800"
        />
        <DataCard 
          title="Recent Events" 
          value="5" 
          icon="📅" 
          color="bg-purple-100 text-purple-800"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        {/* Activity timeline would go here */}
      </div>
    </div>
  );
};

export default Dashboard;