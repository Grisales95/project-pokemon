import styled from 'styled-components';
import { ListContainer } from '../../Navbar/Navbar.elements';

export const ListPokemon = styled(ListContainer)`
  flex-wrap: wrap;
  justify-content: safe center;

  margin: 50px auto;

  @media (max-width: 599px) {
    justify-content: center;
  }
`;

export const PokemonCard = styled.li`
  align-items: center;
  background-color: ${({ background }) => background};
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 15px;
  position: relative;
  max-width: 250px;
  min-width: 250px;
  min-height: 170px;
  width: 50%;

  @media (max-width: 600px) {
    max-width: 320px;
    width: 90%;
  }

  @media (max-width: 700px) and (min-width: 600px) {
    margin: 10px 0;
    min-width: 150px;
    width: 49%;
  }

  @media (max-width: 1020px) and (min-width: 730px) {
    max-width: 400px;
    width: 46%;
  }
`;

export const PokemonName = styled.h3`
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: underline;
`;

export const TypePokemon = styled.div`
  /* background-color: rgba(255, 255, 255, 0.3); */
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 15px;
  color: #fff;
  display: inline-block;
  font-weight: 400;
  font-size: 0.8rem;
  margin: 3px 0;
  padding: 6px;
`;

export const PokemonOrder = styled.div`
  color: #fff;
  font-weight: bold;
  position: absolute;
  right: 20px;
  top: 5px;
`;

export const PokemonImg = styled.img`
  height: 110px;
  width: 130px;
  transition: all 0.4s;
  z-index: 1;

  &:hover {
    filter: saturate(200%);
    transform: scale(1.2);
  }
`;

export const PokeBallImg = styled.img`
  bottom: 15px;
  opacity: 0.3;
  position: absolute;
  right: 15px;
  width: 120px;
`;

export const AddFavoriteIcon = styled.i`
  color: #fff;
  font-size: 1.2rem;
  left: 15px;
  position: absolute;
  top: 6px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const LinkButton = styled.button`
  bottom: 6px;
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.border};
  padding: 5px 10px;
  position: absolute;
`;
