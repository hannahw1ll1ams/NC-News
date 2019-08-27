import React, { Component } from 'react';

class SearchBox extends Component {

  render() {
    return (
      <div>
        <form >
          <input placeholder="Find a user" />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBox;