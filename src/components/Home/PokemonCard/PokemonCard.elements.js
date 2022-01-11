import styled from 'styled-components';
import { ListContainer } from '../../Navbar/Navbar.elements';

export const ListPokemon = styled(ListContainer)`
  flex-wrap: wrap;
  justify-content: ${({ flex }) => (flex ? 'flex-start' : 'space-between')};

  margin: 50px auto;

  @media (max-width: 730px) {
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
  min-height: 150px;
  width: 50%;

  @media (max-width: 700px) {
    max-width: 320px;
    min-width: 250px;
    width: 60%;
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
`;

export const TypePokemon = styled.div`
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
  /* z-index: 100; */

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
  z-index: -1;
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
