import React from "react";
//import Mew from "../components/Mew";
import logo from "../Assets/logo-pokeapi.png";
import pokemon from "../Assets/pokemon.gif";
import { motion } from "framer-motion";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main style={{ overFlowY: "hidden" }}>
      <motion.div className="content-container">
        <img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt="logo-pokeapi"
        />
        <Link to="/pokemonlist">
          <img className="pokemon" src={pokemon} alt="" />
        </Link>
      </motion.div>
    </main>
  );
};

export default Home;
