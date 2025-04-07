import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Matches from './pages/Matches';
import Events from './pages/Events';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={
              <div className="flex">
                <Sidebar />
                <div className="p-8 w-full">
                  <Outlet />
                </div>
              </div>
            }>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/events" element={<Events />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;