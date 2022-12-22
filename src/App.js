import Home from "./components/Home/Home.jsx";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer.jsx";
import Add from "./components/Add/Add.jsx";
import ProductContextProvider from "./ProductContextProvider.js";
import MyRoutes from "./MyRoutes.js";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Navbar />
        <Home />
        <Products />
        <Add />
        <Footer />
        <MyRoutes />
      </ProductContextProvider>
    </div>
  );
}

export default App;
