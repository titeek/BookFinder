import { combineReducers } from 'redux';
import { books } from './books/reducer';
import { booksFilters } from './booksFilter/reducer';
import { numberOfResults } from './numberOfResults/reducer';

export default combineReducers({
  books,
  booksFilters,
  numberOfResults
});