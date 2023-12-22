import { ContactContainer, ContText, ContLink } from "./Header.styled";
import PropTypes from 'prop-types';

const Contacts = ({svg, text, contact}) =>{
return(
    <ContactContainer>
                    <div>
                    {svg}
                    </div>
                    <div>
                    <ContText>{text}</ContText>
                    <ContLink href="">{contact}</ContLink>
                    </div>
            </ContactContainer>
)
}

export default Contacts;

Contacts.propTypes = {
    svg: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    contact: PropTypes.string,
}
