// import { Link, NavLink } from "react-router-dom"
import { HeaderComponent, HeaderContainer, Nav, ContactContainer, ContactsWrapper, StyledNavLink, ContText, ContLink} from "./Header.styled";
import LogoSvg from "./Svg/LogoSvg";
import PhoneSvg from "./Svg/PhoneSvg";
import MessageSvg from "./Svg/MessageSvg";
import { Container } from "components/SecForm/SecForm.styled";

const Header = ()=>{
    return(
        <Container>
        <HeaderComponent>
            <HeaderContainer>
            <LogoSvg/>
            <Nav>
                <StyledNavLink to="/">About Us</StyledNavLink>
                <StyledNavLink to="/servicer">Services</StyledNavLink>
                <StyledNavLink to="/work">Work</StyledNavLink>
                <StyledNavLink to="/news">News</StyledNavLink>
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            </Nav>
            <ContactsWrapper>
                <ContactContainer>
                    <div>
                    <PhoneSvg/>
                    </div>
                    <div>
                    <ContText>Call us</ContText>
                    <ContLink href="">(405) 555-0128</ContLink>
                    </div>
                </ContactContainer>
                <ContactContainer>
                    <div>
                    <MessageSvg/>
                    </div>
                    <div>
                    <ContText>Talk to us</ContText>
                    <ContLink href="">hello@createx.com</ContLink>
                    </div>
                </ContactContainer>
            </ContactsWrapper>
            </HeaderContainer>
        </HeaderComponent>
        </Container>
    )

}

export default Header;