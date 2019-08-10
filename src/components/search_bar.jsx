import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value)
    // change the state
    this.setState({
      term: event.target.value
    });
  }
  render() {
    return (
      <input type="text"
        value={this.state.term}
        placeholder="search for a gif"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
