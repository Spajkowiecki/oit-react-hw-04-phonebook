import { createSlice, nanoid } from '@reduxjs/toolkit';

const storage = () => {
  try {
    const data = JSON.parse(localStorage.getItem('contacts'));
    return data || [];
  } catch (error) {
    console.error('Error with localStorage: ', error);
    return [];
  }
};

export const phoneSlicer = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: storage(),
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        console.log(action.payload.contact);
        state.contacts.push(action.payload.contact);
        localStorage.setItem('contacts', JSON.stringify(state.contacts));
      },

      prepare: contact => {
        return {
          payload: { contact: { id: nanoid(), ...contact } },
        };
      },
    },
    removeContact: {
      reducer: (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
        localStorage.setItem('contacts', JSON.stringify(state.contacts));
      },
      prepare: id => {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

const filterSlicer = createSlice({
  name: 'phonebookFilter',
  initialState: {
    filter: '',
  },

  reducers: {
    setFilter: {
      reducer: (state, action) => {
        console.log(action.payload);
        state.filter = action.payload;
      },
      prepare: filter => {
        return {
          payload: filter,
        };
      },
    },
  },
});

export const phoneReducer = phoneSlicer.reducer;
export const phoneFilter = filterSlicer.reducer;

export const { setFilter } = filterSlicer.actions;
export const { addContact, removeContact } = phoneSlicer.actions;
