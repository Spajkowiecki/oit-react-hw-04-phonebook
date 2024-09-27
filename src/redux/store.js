import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import { phoneFilter, phoneReducer } from './reducers';

const enhancer = devToolsEnhancer();
const store = configureStore({
  reducer: {
    phonebook: phoneReducer,
    phonebookFilter: phoneFilter,
  },
});

export default store;
