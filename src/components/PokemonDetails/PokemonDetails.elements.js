import styled from "styled-components";

export const PokemonDetailsContainer = styled.div`
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  display: flex;
  flex-direction: column;
  justify-content: Center;
  height: 100vh;
  width: 100%;
`;

export const PokemonContainer = styled.div`
  border: 1px solid #fff;
  width: 95%;
`;

export const NameContainer = styled.div`
  color: #fff;
  font-weight: bold;
  line-height: 2;
  text-align: start;
  width: 95%;
`;

export const PokemonDetailsInfo = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
