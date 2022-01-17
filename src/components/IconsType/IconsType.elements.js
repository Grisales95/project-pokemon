import styled from "styled-components";
import { NavContainer } from "../Navbar/Navbar.elements";

export const IconsContainer = styled(NavContainer)`
  display: flex;
  flex-wrap: wrap;
  height: min-content;
  justify-content: space-between;
  margin: 20px auto;

  @media (max-width: 768px) {
    // justify-content: center;
  }
`;

export const IconsTypeStyled = styled.img`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  cursor: pointer;
  margin: 5px;
  padding: 8px;
  position: relative;
  transition: 0.3s;
  width: 40px;

  &:before {
    content: "holllllllllllaaaaaaaaa";
    border: 2px solid #000;
    height: 100%;
    position: absolute;
    outline: 3px dashed blue;
    outline-offset: 3px;
    width: 100%;
  }

  &:hover {
    padding: 5px;
  }
`;
