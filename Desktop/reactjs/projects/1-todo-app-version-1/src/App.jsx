import React from 'react';
// 💡 सबसे पहले रिएक्ट राउटर की ज़रूरी चीज़ों को इम्पोर्ट करें
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// मान लेते हैं हमारे पास ये 3 पेजों के कंपोनेंट्स हैं
const Home = () => <h2>🏠 होम पेज पर आपका स्वागत है!</h2>;
const About = () => <h2>ℹ️ यह हमारा अबाउट पेज है।</h2>;

// लॉगिन पेज जहाँ हम useNavigate का इस्तेमाल करेंगे
const Login = () => {
  const navigate = useNavigate(); // हुक को एक्टिवेट किया

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("लॉगिन सफल रहा! अब आपको होम पेज पर भेजा जा रहा है...");
    
    // 🎯 जादू: बटन क्लिक या फॉर्म सबमिट होने के बाद कोडिंग से पेज बदला
    navigate("/"); 
  };

  return (
    <form onSubmit={handleLoginSubmit} style={{ marginTop: '20px' }}>
      <input type="text" placeholder="यूज़रनेम" required /> <br /><br />
      <button type="submit" className="btn btn-primary">लॉगिन करें</button>
    </form>
  );
};

function App() {
  return (
    <div className="container mt-4">
      {/* 🧭 NAVIGATION MENU: यहाँ Link टैग का इस्तेमाल किया है */}
      <nav className="mb-4">
        <Link to="/" className="btn btn-outline-dark me-2">Home</Link>
        <Link to="/about" className="btn btn-outline-dark me-2">About</Link>
        <Link to="/login" className="btn btn-outline-dark">Login Page</Link>
      </nav>

      <hr />

      {/* 🛣️ ROUTES CONTAINER: यहाँ रास्तों की चेकिंग होगी */}
      <Routes>
        {/* जब यूआरएल '/' होगा, तो Home कंपोनेंट दिखेगा */}
        <Route path="/" element={<Home />} />
        
        {/* जब यूआरएल '/about' होगा, तो About कंपोनेंट दिखेगा */}
        <Route path="/about" element={<About />} />
        
        {/* जब यूआरएल '/login' होगा, तो Login कंपोनेंट दिखेगा */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
