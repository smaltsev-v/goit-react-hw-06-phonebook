import PropTypes from "prop-types";
import s from './ContactUser.module.css';
import { BiTrash } from "react-icons/bi";


const ContactUser = ({contact, onDeleteContacts}) => {
  return (
    <li className={s.contactItem}>
      <span className={s.name}>{contact.name}</span>
      <span className={s.phone}>{contact.number}</span>
      
      <BiTrash
        fill="red"
          type="button"
          onClick={() => onDeleteContacts(contact.id)}
        />
     
    </li>
  );
}

export default ContactUser;

ContactUser.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
