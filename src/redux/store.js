import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pokeReducer from "./pokeDucks";

const rootReducer = combineReducers({
    pokemones: pokeReducer
})

// Aqui solamente se configura la extencion de Redux para chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Se genera el store y se configura el acceso al mismo por medio de la extencion de chrome
export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}