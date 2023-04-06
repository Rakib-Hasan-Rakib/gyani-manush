import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="min-h-[calc(100vh-220px)] mt-28 md:mt-4 mb-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
