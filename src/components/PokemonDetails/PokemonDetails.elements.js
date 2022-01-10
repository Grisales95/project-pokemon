import styled from 'styled-components';

const ContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const PokemonDetailsContainer = styled(ContainerFlexColumn)`
  align-items: center;
  background: ${({ bgColor }) => bgColor};

  justify-content: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const PokemonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 450px;
  padding: 20px 0;
  width: 85%;

  @media (max-width: 1023px) {
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 95%;
  }
`;

export const NameContainer = styled.div`
  color: #fff;
  font-weight: bold;
  line-height: 1;
  padding-left: 20px;
  margin-top: -30px;
  width: 85%;
  @media (max-width: 1023px) {
    width: 95%;
    margin-top: 15px;
  }
`;

export const ImgPokemon = styled.img`
  max-height: 380px;
  padding: 10px 0;
  width: 90%;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1.5rem;
  margin: 5px 0;

  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

export const NamePokemon = styled.h3`
  border-bottom: 3px solid #fff;
  margin: 10px 0;
  padding-bottom: 10px;
  font-size: 3rem;
`;

export const PokemonImageContainer = styled(ContainerFlexColumn)`
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  @media (max-width: 1023px) {
    align-items: center;
    order: 1;
    width: 90%;
  }
`;

export const StatsPokemonContainer = styled(ContainerFlexColumn)`
  padding-left: 50px;
  width: 35%;

  @media (max-width: 1023px) {
    align-items: center;
    order: 2;
    padding: 0;
    width: 90%;
  }
`;

export const PokemonDetailsInfo = styled(ContainerFlexColumn)`
  color: #fff;
  font-weight: bold;
  justify-content: space-between;
  padding: 0;
  padding-left: 25px;
  width: 25%;

  @media (max-width: 1023px) {
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    order: 3;
    padding: 0;
    width: 90%;
  }
  @media (max-width: 500px) {
    order: 3;
    padding: 0;
    width: 90%;
  }
`;

export const IconsTypeContainer = styled.div`
  display: flex;
`;

export const IconsTypeBackground = styled.div`
  background: ${({ bgIcon }) => bgIcon};
  border-radius: 100%;
  height: 60px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 60px;

  transition: 200ms all;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const IconsImg = styled.img`
  height: 60%;
  width: 60%;
  margin: 20%;
`;

export const BaseStatsContainer = styled(ContainerFlexColumn)`
  padding: 0 15px;
  border-left: 3px solid #fff;
  margin: 20px 0;
  width: 100%;
  @media (max-width: 1023px) and (min-width: 500px) {
    border-left: none;
    border-bottom: 3px solid #fff;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0;
  }

  @media (max-width: 499px) {
    border-left: none;
    border-bottom: 3px solid #fff;
    padding: 10px 0;
  }
`;

export const PokemonStats = styled.p`
  background: #fff;
  border-radius: 10px;
  color: ${({ color }) => color};
  display: inline-block;
  font-weight: bold;
  margin: 5px 0;
  padding: 5px 10px;
  width: max-content;

  @media (max-width: 1023px) {
    margin-right: 10px;
  }
`;

export const PokemonAbilities = styled(PokemonStats)`
  color: ${({ color }) => color};
  margin-right: 10px;
`;

export const AbilitiesContainer = styled.div`
  @media (max-width: 1023px) {
    text-align: start;
  }
`;

export const Abilities = styled.h3`
  font-size: 1.4rem;
  margin: 15px 0;
`;

export const ShinyContainer = styled(ContainerFlexColumn)`
  padding: 0;

  @media (max-width: 1023px) {
    align-items: center;
    margin-top: 25px;
    width: 100%;
  }
`;

export const ShinyContainerImg = styled.div`
  display: flex;
  padding-left: 40px;

  @media (max-width: 1023px) {
    justify-content: center;
    padding: 0;
  }
`;
export const ShinyImg = styled.img`
  text-align: center;
  width: 120px;

  @media (max-width: 1023px) {
    width: 150px;
  }
`;

export const ContainerSizePokemon = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
