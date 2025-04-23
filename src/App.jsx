import Navbar from "./Components/Navbar/Navbar";
import { Route, BrowserRouter as Onion, Routes } from "react-router";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Auth from "./Pages/Auth";
import Footer from "./Components/Footer/Footer";
import menBanner from "./Assets/banner_mens.png";
import womenBanner from "./Assets/banner_women.png";
import kidsBanner from "./Assets/banner_kids.png";

function App() {
  return (
    <div>
      <Onion>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={menBanner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={womenBanner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kidsBanner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path="/product/:productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </Onion>
    </div>
  );
}

export default App;
