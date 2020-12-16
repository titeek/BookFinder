import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

class SearchFormByTitle extends React.Component {
  state = {term: ''};

  onSearchInputChange = (event) => {
    this.setState({term: event.target.value});
  }
  
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render () {
    return (
      <React.Fragment>
        <h5>Type the title</h5>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
          <section className="d-flex align-items-center mb-3">
            <input type="text" spellCheck="false" id="seatch-input" onChange={this.onSearchInputChange} className="form-control form-control-lg mr-3"></input>
            <button className="btn finder_button" onClick={this.onFormSubmit}>
              <SearchIcon className="finder_button" fontSize="large"/>
            </button>
          </section>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchFormByTitle;