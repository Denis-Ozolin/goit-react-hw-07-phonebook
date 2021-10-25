import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './contacts-actions';

const errorMessage = (prevState, contactName) => {
  alert(`${contactName} is alredy in contacts.`);
  return prevState;
};

const items = createReducer([], {
  [addContact]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? errorMessage(state, payload.name)
      : [payload, ...state],
  [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items,
  filter,
});
