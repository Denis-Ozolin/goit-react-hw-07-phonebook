export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getContacts = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );
  return filteredContacts ? filteredContacts : items;
};
