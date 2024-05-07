import styled, { keyframes } from 'styled-components';

const fadeOutAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const FadingTextContent = styled.div`
  & .appear {
    animation-name: ${fadeInAnimation};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

  & .fade {
    animation-name: ${fadeOutAnimation};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
`;
