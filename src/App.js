import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NftListing from "./components/Crud/NftListing.jsx";
import NftCreate from "./components/Crud/NftCreate.jsx";
import NftDetail from "./components/Crud/NftDetails.jsx";
import NftEdit from "./components/Crud/NftDetails.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/crud" element={<NftListing />} />
          <Route path="/nft/create" element={<NftCreate />} />
          <Route path="/nft/edit/:nid" element={<NftEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
