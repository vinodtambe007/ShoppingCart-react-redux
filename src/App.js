import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Cart from './component/Cart';
import CartProduct from './component/CartProduct';
import Wishlist from './component/wishList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Cart />} />
        <Route path='/cart' element={<CartProduct />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
