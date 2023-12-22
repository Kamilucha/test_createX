import { Container } from "components/App.styled";
import { HeaderComponent, HeaderContainer, Nav, ContactsWrapper, StyledNavLink } from "./Header.styled";
import Contacts from "./Contacts";
import LogoSvg from "./Svg/LogoSvg";
import PhoneSvg from "./Svg/PhoneSvg";
import MessageSvg from "./Svg/MessageSvg";

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
        <Contacts
        svg={<PhoneSvg/>}
        text={"Call us"}
        contact={"(405) 555-0128"}
        />

        <Contacts
        svg={<MessageSvg/>}
        text={"Talk to us"}
        contact={"hello@createx.com"}
        />

            </ContactsWrapper>
            </HeaderContainer>
        </HeaderComponent>
        </Container>
    )

}

export default Header;