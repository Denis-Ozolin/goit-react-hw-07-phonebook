import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({contacts}) => (
  <List>
    {contacts.length > 0 &&
      contacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} number={phone}/>
      ))}
  </List>
);
