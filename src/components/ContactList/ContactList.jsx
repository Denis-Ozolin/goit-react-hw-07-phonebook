import { useDeleteContatctMutation } from 'redux/contacts/contacts-slice';

// import { useDispatch } from 'react-redux';

// useSelector,
// import { useGetContactsQuery } from 'redux/contacts/contacts-slice';
// import { deleteContact } from 'redux/contacts/contacts-actions';
// import { getContacts } from 'redux/contacts/contacts-selectors';
import { List } from './ContactList.styled';

export const ContactList = ({contacts}) => {
  // const { data, isFetching } = useGetContactsQuery();
  // const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();

  const [deleteContatct, {isLoading}] = useDeleteContatctMutation();

  console.log(contacts);
  return (
    <List>
      {contacts.length > 0 &&
        contacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p>
              {name}: {phone}
            </p>
            <button type="button" onClick={() => deleteContatct(id)}>
              {isLoading? 'Deleting...': 'Delete'}
            </button>
          </li>
        ))}
    </List>
  );
};
