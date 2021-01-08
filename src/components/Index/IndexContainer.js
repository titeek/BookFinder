import { connect } from 'react-redux';
import { booksFetched } from '../../redux/books/actions';
import { getFilteredBooks } from '../../selectors/getFilteredBooks';
import Index from './Index';

const mapStateToProps = (state) => {
  return{
    books: getFilteredBooks(state.books, state.booksFilters)
  }
};

const mapDispatchToProps = { booksFetched };

const IndexContainer = connect(mapStateToProps, mapDispatchToProps)(Index);
export default IndexContainer;