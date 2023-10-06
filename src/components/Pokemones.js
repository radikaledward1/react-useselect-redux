import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemones, siguientesPokemones } from '../redux/pokeDucks';

const Pokemones = () => {
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.array)

    return (
        <div>
            <p>
                <button onClick={() => {dispatch(obtenerPokemones())}}>Cargar</button>
                <button onClick={() => {dispatch(siguientesPokemones())}}>Siguientes</button>
            </p>
            Lista de Pokemones
            <ul>
            {
                pokemones.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Pokemones;