import axios from 'axios';

export const fetchPokemon = (num) => {
    return dispatch => {
        dispatch({type: 'FETCH_POKEMON_START'});
        axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`)
        .then(res => {
            dispatch({ type: 'FETCH_POKEMON_SUCCESS', payload: res.data})
        })
        .catch(err=>{
            dispatch({
                type: 'FETCH_POKEMON_FAILURE',
                payload: `Error ${err.response.status}: ${err.response.data}`
            });
        });
    };
};

export const updateTitle = newTitle => {
    return {};
};
  