import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../redux/actions/actions";
import _ from "lodash";
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page = 1) => {
    dispatch(getPokemonList(page));
  };

  const showData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return pokemonList.data.map((e) => {
        return (
          <div key={e.id}>
            <Pokemon />
            <p>{e.name}</p>
            <Link to={`/pokemon/${e.name}`}>View</Link>
          </div>
        );
      });
    }
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }
    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
    return <p>unable to get data</p>;
  };
  return <>{showData}</>;
};

export default PokemonList;
