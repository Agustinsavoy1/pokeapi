import axios from "axios";
export const POKEMON_LIST_LOADING = "POKEMON_LIST_LOADING";
export const POKEMON_LIST_SUCCESS = "POKEMON_LIST_SUCCESS";
export const POKEMON_LIST_FAIL = "POKEMON_LIST_FAIL";

export const getPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_LIST_LOADING,
    });
    const perPage = 15;
    const offset = page * perPage - perPage;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`
    );

    dispatch({
      type: POKEMON_LIST_SUCCESS,
      payload: res.data.results,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_LIST_FAIL,
    });
  }
};
