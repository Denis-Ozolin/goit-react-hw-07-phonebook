import { useFetchContactsQuery } from 'redux/contacts/contacts-slice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { Container, Title } from './Phonebook.styled';

export const Phonebook = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const value = useSelector(getFilter);
  const filteredContacts = data && data.filter(({ name }) =>
    name.toLowerCase().includes(value.toLowerCase()),
  );
  
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactsFilter/>
      {isFetching && 'Loading...'}
      {data && <ContactList contacts={filteredContacts ? filteredContacts : data} />}
    </Container>
  );
};