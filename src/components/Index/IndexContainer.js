import { connect } from 'react-redux';
import { booksFetched } from '../../redux/books/actions';
import { getFilteredBooks } from '../../selectors/getFilteredBooks';
import { numberOfResultsFetched } from '../../redux/numberOfResults/actions';
import Index from './Index';

const mapStateToProps = (state) => {
  return{
    books: getFilteredBooks(state.books, state.booksFilters),
    numberOfResults: state.numberOfResults
  }
};

const mapDispatchToProps = { booksFetched, numberOfResultsFetched };

const IndexContainer = connect(mapStateToProps, mapDispatchToProps)(Index);
export default IndexContainer;