import {useSelector, useDispatch} from 'react-redux';
import actionsContacts from '../../redux/contacts/contacts-actions';
import {getVisibleContacts} from '../../redux/contacts/contacts-selector';
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import ContactUser from "./ContactUser";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  const onDeleteContacts = id => dispatch(actionsContacts.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        return (
          <ContactUser key={contact.id} contact={contact} onDeleteContacts={onDeleteContacts}/>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ContactList;
