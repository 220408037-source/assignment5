import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState('');

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>React Product Dashboard</h2>
      
      <button 
        onClick={toggleProducts} 
        style={{ marginBottom: '20px', padding: '10px 15px', cursor: 'pointer', backgroundColor: '#242424', color: 'white', border: 'none', borderRadius: '6px' }}
      >
        {showProducts ? "Hide Products" : "Show Products"}
      </button>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Type your name..."
          style={{ padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      
      <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Hello, {name}</p>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;