import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/matches');
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Matches</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map(match => (
            <div key={match._id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{match.teamA} vs {match.teamB}</h3>
                  <p className="text-gray-600 mt-1">{new Date(match.date).toLocaleDateString()}</p>
                  <p className="text-gray-600">{match.location}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  match.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                  match.status === 'ongoing' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {match.status}
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Score: {match.score || 'Not available'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Matches;