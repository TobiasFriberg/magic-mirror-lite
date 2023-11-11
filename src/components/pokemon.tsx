import React, { useEffect, useState } from 'react';
import { PokemonName, PokemonTitle, PokemonWrapper } from '../styles';

type PokemonProps = {
  size?: string;
};

export const Pokemon = ({ size = 'auto' }: PokemonProps) => {
  const [pokemon, setPokemon] = useState<any>();

  useEffect(() => {
    if (!window.sessionStorage.getItem('pokemon')) {
      fetchPokemon();
      return;
    }
    setPokemon(JSON.parse(window.sessionStorage.getItem('pokemon') || ''));
  }, []);

  const fetchPokemon = async () => {
    const randomPokemonId = Math.round(Math.random() * 1010) + 1;
    const response = await (await fetch(` https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)).json();
    window.sessionStorage.setItem('pokemon', JSON.stringify(response));
    setPokemon(response);
  };

  if (!pokemon) {
    return null;
  }

  return (
    <PokemonWrapper size={size}>
      <PokemonTitle>Pokemon of the day!</PokemonTitle>
      <PokemonName>{`#${pokemon.order}, ${pokemon.name}`}</PokemonName>
      <img src={pokemon.sprites.front_default} />
    </PokemonWrapper>
  );
};
