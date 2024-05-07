import styled from 'styled-components';

export const PokemonTitle = styled.div`
  position: relative;
  font-size: 1.5em;
  font-weight: 200;
  z-index: 1;
`;

export const PokemonName = styled.div`
  position: relative;
  font-size: 2em;
  font-weight: 400;
  text-transform: capitalize;
  z-index: 1;
`;

export const PokemonWrapper = styled.div<{ size?: string }>`
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  width: ${(p) => (!p.size ? 'auto' : p.size)};

  img {
    position: relative;
    z-index: 0;
    width: 100%;
    margin-top: -20%;
  }
`;
