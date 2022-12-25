import "./App.css";
import AuthContextProvider from "./AuthContextProvider";
import MyRoutes from "./MyRoutes";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
     <AuthContextProvider>
        <Navbar />
        <MyRoutes />
        </AuthContextProvider>
    </div>
  );
}

export default App;
