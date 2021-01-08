import { combineReducers } from 'redux';
import { books } from './books/reducer';
import { booksFilters } from './booksFilter/reducer';

export default combineReducers({
  books,
  booksFilters
});