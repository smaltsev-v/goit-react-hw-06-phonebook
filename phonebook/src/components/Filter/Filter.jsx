import { useDispatch, useSelector } from 'react-redux';
import actionsContacts from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selector';
import PropTypes from "prop-types";
import s from "./Filter.module.css";


const Filter = () => {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();
  const onChange = e => dispatch(actionsContacts.changeFilter(e.target.value));

  return (
    <div className={s.filter}>
      <label className={s.labelForm}>
        Find contacts by name
        <input
          className={s.inputFilter}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

