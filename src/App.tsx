import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("Bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <button type="button" onClick={() => setPokemonName("Bulbasaur")}>
        Bulbasaur
      </button>
      <button type="button" onClick={() => setPokemonName("Mew")}>
        Mew
      </button>
    </div>
  );
}

export default App;