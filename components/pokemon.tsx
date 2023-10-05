import React, { useEffect, useState } from 'react';
import { PokemonName, PokemonTitle, PokemonWrapper } from '../styles';

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState<any>();

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const randomPokemonId = Math.round(Math.random() * 1010) + 1;
    const response = await (await fetch(` https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)).json();

    setPokemon(response);
  };

  if (!pokemon) {
    return null;
  }

  return (
    <PokemonWrapper>
      <PokemonTitle>Pokemon of the day!</PokemonTitle>
      <PokemonName>{`#${pokemon.order}, ${pokemon.name}`}</PokemonName>
      <img src={pokemon.sprites.front_default} />
    </PokemonWrapper>
  );
};
