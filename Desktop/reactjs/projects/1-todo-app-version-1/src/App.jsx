import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// ==========================================
// 👥 कंपोनेंट 1: USERS LIST PAGE (जहाँ से हम Navigate करेंगे)
// ==========================================
const UsersList = () => {
  const navigate = useNavigate(); // 💡 स्टेप 1: useNavigate हुक को चालू किया

  // मान लेते हैं हमारे पास डेटाबेस से आया हुआ यह 3 यूज़र्स का डेटा है
  const usersData = [
    { id: '1', name: 'Amit Kumar', email: 'amit@gmail.com', role: 'Admin' },
    { id: '2', name: 'Rahul Sharma', email: 'rahul@gmail.com', role: 'Editor' },
    { id: '3', name: 'Priya Singh', email: 'priya@gmail.com', role: 'Subscriber' },
  ];

  const handleUserClick = (user) => {
    console.log(`जादू शुरू: ${user.name} के बटन पर क्लिक हुआ!`);

    // 🎯 स्टेप 2: बटन क्लिक होने पर हम कोडिंग से URL बदल रहे हैं
    // हम यूआरएल को बदलते हुए '/user/profile' कर देंगे
    // और साथ में 'state' के अंदर पूरा का पूरा 'user' ऑब्जेक्ट गुप्त रूप से भेज रहे हैं!
    navigate('/user/profile', { state: { selectedUser: user } });
  };

  return (
    <div className="card p-4 shadow-sm">
      <h3 className="text-primary mb-3">👥 कंपनी के कर्मचारी (Users List)</h3>
      <p className="text-muted">नीचे दिए गए बटन पर क्लिक करते ही ऊपर का URL चेंज हो जाएगा:</p>
      
      <div className="list-group">
        {usersData.map((user) => (
          <div key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{user.name}</strong> <span className="badge bg-secondary ms-2">{user.role}</span>
            </div>
            
            {/* बटन क्लिक होने पर हमारा handleUserClick फंक्शन चलेगा */}
            <button className="btn btn-sm btn-primary" onClick={() => handleUserClick(user)}>
              प्रोफ़ाइल देखें (URL बदलें) ➡️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 🖼️ कंपोनेंट 2: USER PROFILE PAGE (जहाँ डेटा रिसीव होगा)
// ==========================================
const UserProfile = () => {
  // 💡 स्टेप 3: useLocation हुक की मदद से हम पिछले पेज से भेजा गया 'state' (गुप्त डेटा) यहाँ पकड़ रहे हैं
  const location = useLocation();
  const userData = location.state?.selectedUser; // डेटा को सुरक्षित निकाला

  const navigate = useNavigate(); // वापस जाने के लिए

  return (
    <div className="card p-4 shadow border-success animate__animated animate__fadeIn">
      <h3 className="text-success mb-3">🖼️ कर्मचारी प्रोफ़ाइल (User Profile)</h3>
      
      {/* अगर डेटा मिल गया, तो स्क्रीन पर दिखाओ */}
      {userData ? (
        <div className="bg-light p-3 rounded">
          <p><strong>आईडी (ID):</strong> {userData.id}</p>
          <p><strong>पूरा नाम:</strong> {userData.name}</p>
          <p><strong>ईमेल एड्रेस:</strong> {userData.email}</p>
          <p><strong>रोल (Role):</strong> {userData.role}</p>
        </div>
      ) : (
        // अगर कोई यूजर सीधे URL टाइप करके आ जाए (बिना बटन क्लिक किए), तो उसे यह एरर दिखेगी
        <p className="text-danger">⚠️ कोई डेटा नहीं मिला! कृपया होम पेज से बटन दबाकर आएं।</p>
      )}

      {/* 🚀 शॉर्टकट: navigate(-1) लिखने से यूजर ठीक पिछले पेज पर वापस लौट जाता है */}
      <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
        ⬅️ पीछे जाएँ (Go Back)
      </button>
    </div>
  );
};

// ==========================================
// 🗺️ मुख्य कंपोनेंट 3: APP ROUTING SETUP
// ==========================================
function App() {
  return (
    <div className="container mt-5" style={{ maxWidth: '600px', fontFamily: 'sans-serif' }}>
      <div className="text-center mb-4">
        <h2>🛠️ useNavigate() का लाइव वर्किंग मॉडल</h2>
        <small className="text-muted">नीचे दिए गए बॉक्स को ध्यान से देखें</small>
      </div>
      <hr />

      {/* रास्तों का बक्सा */}
      <Routes>
        {/* डिफ़ॉल्ट रूप से पहले यूज़र्स की लिस्ट दिखेगी */}
        <Route path="/" element={<UsersList />} />
        
        {/* जब यूआरएल '/user/profile' होगा, तो प्रोफ़ाइल कंपोनेंट दिखेगा */}
        <Route path="/user/profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
