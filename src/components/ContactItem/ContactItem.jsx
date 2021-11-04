import { useDeleteContatctMutation } from 'redux/contacts/contacts-slice';

export const ContactItem = ({id, name, number}) => {
  const [deleteContatct, {isLoading}] = useDeleteContatctMutation();

  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => deleteContatct(id)}>
        {isLoading? 'Deleting...': 'Delete'}
      </button>
    </li>
  )
}