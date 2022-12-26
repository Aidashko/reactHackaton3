import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NftListing from "./components/Crud/NftListing.jsx";
import NftCreate from "./components/Crud/NftCreate.jsx";
import NftEdit from "./components/Crud/NftDetails.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/CarouselBox.jsx";
import AuthPage from "./pages/AuthPage";
import AuthContextProvider from "./contexts/AuthContextProvider";

const PUBLIC_ROUTES = [{ link: "/auth", element: <AuthPage />, id: 3 }];

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/crud" element={<NftListing />} />
          <Route path="/nft/create" element={<NftCreate />} />
          <Route path="/nft/edit/:nid" element={<NftEdit />} />
          {PUBLIC_ROUTES.map((item) => (
            <Route path={item.link} element={item.element} key={item.id} />
          ))}
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
