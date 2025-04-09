import { useParams } from 'react-router';

const PokemonDetails = (props) => {
    const { pokemonId } = useParams()
    console.log('pokemonId:', pokemonId)
    const singlePokemon = props.pokemon.find((poke) => (
        poke._id === Number(pokemonId)
    ))
    console.log('Pokemon Object:', singlePokemon)

    return (
      <>
        <h2>Pokemon {singlePokemon.name} Details</h2>
        <dl>
          <dt>Weight:</dt>
          <dd>{singlePokemon.weight} lbs</dd>
          <dt>Height:</dt>
          <dd>{singlePokemon.height} m</dd>
        </dl>
      </>
    );
  };
  
  export default PokemonDetails;
  