import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// 💡 ध्यान दें: इसे इम्पोर्ट करना ज़रूरी है
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 🟢 पूरे ऐप को इसके अंदर बंद होना ही चाहिए */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
