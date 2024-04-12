import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./views/Product/Product";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Wishlist from "./components/Wishlist/Wishlist";
import CheckOut from "./components/CheckOut/CheckOut";
import Address from "./components/Address/Address";
import RatingReviews from "./components/RatingReviews/RatingReviews";
import Order from "./components/OrderPlace/Order";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productDetail/:id" element={<ProductDetail/>} />
          <Route path="/wishlist/:wishlistid?" element={<Wishlist/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/address" element={<Address/>} />
          <Route path="/ratingReview" element={<RatingReviews/>} />
          <Route path="/order" element={<Order/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
