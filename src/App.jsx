import { Route, Routes } from "react-router-dom";

import Mammal from "./Pages/Mammals";
import HomePage from "./Pages/Homepage";
import Bird from "./Pages/Birds";
import Reptile from "./Pages/Reptiles";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mammals" element={<Mammal />} />
            <Route path="/birds" element={<Bird />} />
            <Route path="/reptiles" element={<Reptile />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
