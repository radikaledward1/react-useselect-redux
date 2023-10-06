import axios from "axios";

// constantes
const dataInicial = {
    array: [],
    offset: 0
}

const OBTENER_POKEMONES = 'OBTENER_POKEMONES';
const OBTENER_SIGUIENTES_POKEMONES = 'OBTENER_SIGUIENTES_POKEMONES';

// reducers
export default function pokeReducer (state = dataInicial, action) {
    switch(action.type) {
        case OBTENER_POKEMONES:
            return {...state, array: action.payload}
        case OBTENER_SIGUIENTES_POKEMONES:
            return {...state, array: action.payload.results, offset: action.payload.offset}
        default:
            return state
    }
}

// acciones
export const obtenerPokemones = () => async (dispatch, getState) => {
    const { offset } = getState().pokemones;
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
        const { results } = res.data;
        dispatch({type: OBTENER_POKEMONES, payload: results});
    } catch (error) {
        console.log(error);
    }
}

export const siguientesPokemones = () => async (dispatch, getState) => {
    const { offset } = getState().pokemones;
    const siguientes = offset + 10;

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${siguientes}`);
        const { results } = res.data;
        dispatch({type: OBTENER_SIGUIENTES_POKEMONES, payload: {results: results, offset: siguientes}});
    } catch (error) {
        console.log(error);
    }
}