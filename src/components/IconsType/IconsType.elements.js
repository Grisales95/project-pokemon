import styled from 'styled-components';
import { NavContainer } from '../Navbar/Navbar.elements';

export const IconsContainer = styled(NavContainer)`
  display: flex;
  flex-wrap: wrap;
  height: min-content;
  justify-content: space-between;
  margin: 20px auto;
`;

export const IconsTypeStyled = styled.img`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  cursor: pointer;
  padding: 8px;
  transition: padding 0.3s;
  width: 40px;

  &:hover {
    padding: 5px;
  }
`;
