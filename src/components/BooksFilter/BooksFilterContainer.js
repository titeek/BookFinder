import { connect } from 'react-redux';
import { showBooksWithCovers } from '../../redux/booksFilter/actions';
import BooksFilter from './BooksFilter';

const mapStateToProps = (state) => {
  return{
    booksFilter: state.booksFilter
  }
};

const mapDispatchToProps = { showBooksWithCovers };

const BooksFilterContainer = connect(mapStateToProps, mapDispatchToProps)(BooksFilter);
export default BooksFilterContainer;