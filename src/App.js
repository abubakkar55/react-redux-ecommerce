import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Home from "./pages/Home";
import CartPage from './pages/CartPage';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="products" element={<Products /> } />
          <Route path="product_details/:id" element={<ProductDetails /> } />
          <Route path="cart" element={<CartPage /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;