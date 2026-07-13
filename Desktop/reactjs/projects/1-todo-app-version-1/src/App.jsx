import { Routes, Route, Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';

// ==========================================
// 1. HOME PAGE (सर्च बार और Query Params के साथ)
// ==========================================
const Home = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('filter') || ''; // URL से 'filter' की वैल्यू निकाली

  const products = [
    { id: '101', name: 'Laptop', price: '$999', brand: 'Apple' },
    { id: '102', name: 'Smartphone', price: '$699', brand: 'Samsung' },
    { id: '103', name: 'Smartwatch', price: '$199', brand: 'Apple' },
  ];

  // सर्च इनपुट के हिसाब से प्रोडक्ट्स को फ़िल्टर करना
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h3>🏬 हमारी दुकान (Products Store)</h3>
      
      {/* लाइव सर्च बार जो URL को अपडेट करता है */}
      <input 
        type="text" 
        className="form-control mb-3"
        placeholder="प्रोडक्ट सर्च करें (e.g. Laptop)..." 
        value={searchQuery}
        onChange={(e) => setSearchParams({ filter: e.target.value })} // URL में ?filter=value जोड़ता है
      />

      <div className="list-group">
        {filteredProducts.map(product => (
          <div key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
            {product.name} ({product.price})
            
            {/* 🎯 कॉम्प्लेक्स ट्रिक: useNavigate के जरिए हम यूजर को प्रोडक्ट पेज पर भेज रहे हैं
                और साथ में 'state' के अंदर पूरा का पूरा प्रोडक्ट ऑब्जेक्ट गुप्त रूप से ट्रांसफर कर रहे हैं */}
            <button 
              className="btn btn-sm btn-primary"
              onClick={() => navigate(`/product/${product.id}`, { state: { item: product } })}
            >
              Details देखें ➡️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 2. DYNAMIC PRODUCT DETAILS PAGE (`:id` के साथ)
// ==========================================
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  // useParams() यूआरएल से डायनामिक आईडी निकालता है (जैसे /product/101 में से '101')
  const { id } = useParams(); 
  
  // useLocation() की मदद से हम होम पेज से भेजा गया 'state' (गुप्त डेटा) यहाँ रिसीव कर रहे हैं
  const location = useLocation(); 
  const productData = location.state?.item;

  const navigate = useNavigate();

  return (
    <div className="card p-4 mt-3 border-primary">
      <h3>📦 प्रोडक्ट डिटेल्स (Dynamic ID: {id})</h3>
      
      {productData ? (
        <div className="mt-3">
          <p><strong>नाम:</strong> {productData.name}</p>
          <p><strong>कीमत:</strong> {productData.price}</p>
          <p><strong>ब्रांड:</strong> {productData.brand}</p>
        </div>
      ) : (
        <p className="text-danger">कोई डेटा नहीं मिला! कृपया सीधे लिंक से न आएं।</p>
      )}

      {/* कोडिंग के जरिए वापस होम पेज पर भेजना */}
      <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
        ⬅️ पीछे जाएँ (Go Back)
      </button>
    </div>
  );
};

// ==========================================
// 3. 404 NOT FOUND PAGE (गलत यूआरएल के लिए)
// ==========================================
const NotFound = () => {
  return (
    <div className="text-center mt-5 text-danger">
      <h1>⚠️ 404 Error</h1>
      <h3>ओह! आप गलत रास्ते पर आ गए हैं। यह पेज मौजूद नहीं है।</h3>
      <Link to="/" className="btn btn-dark mt-3">वापस होम पेज पर जाएँ</Link>
    </div>
  );
};

// ==========================================
// 4. MAIN APP COMPONENT
// ==========================================
function App() {
  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      <div className="text-center mb-4">
        <h2>🛠️ एडवांस्ड रिएक्ट राउटर डैशबोर्ड</h2>
        <Link to="/" className="btn btn-sm btn-link">Home (Store)</Link>
      </div>
      <hr />

      <Routes>
        {/* साधारण रूट */}
        <Route path="/" element={<Home />} />
        
        {/* 🛣️ डायनामिक रूट: ':id' का मतलब है यहाँ कुछ भी नंबर या टेक्स्ट आ सकता है */}
        <Route path="/product/:id" element={<ProductDetails />} />
        
        {/* 🚨 404 रूट: path="*" का मतलब है ऊपर वालों के अलावा कोई भी गलत यूआरएल */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
