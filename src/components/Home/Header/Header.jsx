import React, { useContext } from 'react'
import { HeaderStyled, HomeContainer, LinkStyled, ListContainer, LogOut, NavBar } from './Header.elements'
import pokemonLogo from "../../../assets/images/pokemon-logo.png"
import { LoginContext } from '../../../contexts/LoginProvider'
const Header = ({children}) => {
    const [, setIsLogin] = useContext(LoginContext)
    return (
        <>
        <HeaderStyled>
            <HomeContainer>
                <NavBar>
                    <img src={pokemonLogo} alt="pokemon-logo" width="120px"/>
                    <ListContainer>
                    <LinkStyled to="/home" e> Home</LinkStyled>
                        <LinkStyled to="/favorites" >Favorites(0)</LinkStyled>
                        <LogOut onClick={() => setIsLogin(false)}><i className="fas fa-sign-out-alt"></i></LogOut>
                    </ListContainer>
                </NavBar>
            </HomeContainer>
        </HeaderStyled> 
        </>
    )
}

export default Header
