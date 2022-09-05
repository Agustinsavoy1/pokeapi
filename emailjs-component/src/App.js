import ContactUs from "./pages/ContactUs";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pokemons from "./pages/Pokemons";
import Pokemon from "./components/Pokemon";

// import Footer from "./components/Footer";

function App() {
  const [backgroundImage, setBackground] = useState("");

  const bgImages = {
    bg_00: "./Assets/bg-00.png",
    bg_01: "./Assets/bg-01.png",
    bg_02: "./Assets/bg-02.png",
    bg_03: "./Assets/bg-03.png",
    bg_04: "./Assets/bg-04.png",
    bg_05: "./Assets/bg-05.png",
    bg_06: "./Assets/bg-06.png",
    bg_07: "./Assets/bg-07.png",
    bg_09: "./Assets/bg-09.png",
  };

  function changeBackground() {
    let currentTime = new Date();
    var now = currentTime.toLocaleTimeString().slice(0, 1);

    if (now >= 0 && now < 10) {
      console.log("bg-00");
      console.log(bgImages.bg_00);
      setBackground(bgImages.bg_00);
    }
  }
  useEffect(() => {
    changeBackground();
  });

  console.log(backgroundImage);
  return (
    <>
      <div
        className="App background"
        style={{
          backgroundImage: { backgroundImage },
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemonlist" element={<Pokemons />} />
          {<Route path="/pokemonlist/:pokemon" element={<Pokemon />} />}
          {/*<Route path="/" element={<Navigate to="/" replace />} />*/}
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        {/*<Footer />*/}
      </div>
    </>
  );
}

export default App;
