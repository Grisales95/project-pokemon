import styled from 'styled-components';
import { ButtonPage, HomeContainer } from '../Home/Home.elements';

export const FavoritesContainer = styled(HomeContainer)`
  margin-top: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const DeleteAllFavoritesButton = styled(ButtonPage)``;

export const NoFavoritesPokemon = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.4rem;
`;
