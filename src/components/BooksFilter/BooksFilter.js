import React from 'react';

class BooksFilter extends React.Component {

  handleFilterChange = e => {
    this.props.showBooksWithCovers(e.currentTarget.checked);
  }

  render() {
    return (
      <form>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" 
          value={this.props.booksFilter}
          onChange={this.handleFilterChange}/>
          <label className="form-check-label" htmlFor="exampleCheck1">Pokaż tylko książki z okładkami</label>
        </div>
      </form>
    );
  }
}

export default BooksFilter;