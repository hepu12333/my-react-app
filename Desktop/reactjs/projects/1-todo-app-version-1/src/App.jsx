import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const Home = () => <h2>🏠 होम पेज पर आपका स्वागत है!</h2>;
const About = () => <h2>ℹ️ यह हमारा अबाउट पेज है।</h2>;

const Login = () => {
  const navigate = useNavigate(); // हुक को एक्टिवेट किया

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("लॉगिन सफल रहा! अब आपको होम पेज पर भेजा जा रहा है...");
    
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
      <nav className="mb-4">
        <Link to="/" className="btn btn-outline-dark me-2">Home</Link>
        <Link to="/about" className="btn btn-outline-dark me-2">About</Link>
        <Link to="/login" className="btn btn-outline-dark">Login Page</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
