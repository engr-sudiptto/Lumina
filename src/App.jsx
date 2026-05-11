import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Profile from './afterLoginPages/Profile';
import VerifyEmail from './afterLoginPages/VerifyEmail';
import Preloader from './components/Preloader';



const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadindHandler = () => {
      setLoading(false);
    };

    // checking : the is already loaded or not
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', loadindHandler);
    }

    // cleanup to prevent memory leaks
    return () => window.removeEventListener('load', loadindHandler);
  }, [])
  
  return (
    <div>
      {loading && <Preloader />}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App