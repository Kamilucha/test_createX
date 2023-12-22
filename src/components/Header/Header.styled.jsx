import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: #424551;
  font-size: 16px;
  font-weight: 700;
  line-height: 25.6px;
  gap: 40px;
  margin-left: 40px;
  transition: background-color 0.3s ease;

  &:hover {
    color: #FF5A30;
  }

  &.active {
    color: #FF5A30;
  }
`;



export const HeaderComponent = styled.header`
border-bottom: 1px solid #E7E9FC;
display: flex;
align-items: center;
padding: 10px 0;
        `

export const HeaderContainer = styled.div`
display: flex;
align-items: center;
margin: auto;
gap: auto;
justify-content: space-between;
        `


export const Nav = styled.nav`
display: flex;
        align-items: center;
        padding-left: 20px;
        height: 50px;
        gap: 20px
        `

export const ContactContainer = styled.li`
display:flex;
`
export const ContactsWrapper = styled.ul`
display:flex;
gap: 13px;
margin-left: auto;
`

export const ContText = styled.p`
color: #424551;
font-size: 16px;
font-weight: 700;
`

export const ContLink = styled.p`
color: #424551;
font-size: 18px;
font-weight: 400;
line-height: 27px;
`



    

     