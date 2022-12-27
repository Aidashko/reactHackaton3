import "./App.css";
import { Route, Routes } from "react-router-dom";
import NftListing from "./components/Crud/NftListing.jsx";
import NftCreate from "./components/Crud/NftCreate.jsx";
import NftEdit from "./components/Crud/NftEdit.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/CarouselBox.jsx";
import AuthPage from "./pages/AuthPage";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./contexts/CartContextProvider";
import Cart from "./components/Cart/Cart";
import OneProd from "./components/Products/OneProd";
import ProdList from "./components/Products/ProdList";

const PUBLIC_ROUTES = [{ link: "/auth", element: <AuthPage />, id: 3 }];

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/crud" element={<NftListing />} />
            <Route path="/nft/create" element={<NftCreate />} />
            <Route path="/nft/edit/:nid" element={<NftEdit />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/prodlist" element={<ProdList />} />
            {PUBLIC_ROUTES.map((item) => (
              <Route path={item.link} element={item.element} key={item.id} />
            ))}
          </Routes>
        </CartContextProvider>
      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
