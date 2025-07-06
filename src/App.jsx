import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ProtectedRoute from './Routers/ProtectedRoute';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
