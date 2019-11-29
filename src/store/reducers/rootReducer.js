import authReducer from './authReducer';
import movementsReducer from './movementsReducer';
import accountsReducer from './accountsReducer';
import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  movements: movementsReducer,
  accounts: accountsReducer,
  categories: categoriesReducer
});

export default rootReducer;