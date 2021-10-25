import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { InputContainer } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <InputContainer>
      <label>
        Find contacts by name
        <input
          value={value}
          onChange={event => dispatch(filterContacts(event.target.value))}
          type="text"
        />
      </label>
    </InputContainer>
  );
};
