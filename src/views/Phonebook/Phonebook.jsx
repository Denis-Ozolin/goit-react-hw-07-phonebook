import { ContactForm } from 'components/ContactForm/ContactForm';
import { useFetchContactsQuery } from 'redux/contacts/contacts-slice';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, Title } from './Phonebook.styled';

export const Phonebook = () => {
  const { data, isFetching } = useFetchContactsQuery();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      {isFetching && 'Loading...'}
      {data && <ContactList contacts={data}/>}
    </Container>
  );
};
