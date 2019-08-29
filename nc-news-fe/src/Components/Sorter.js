import React, { Component } from 'react';

class Sorter extends Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { sort_by, order } = this.state;
    this.props.fetchArticles(sort_by, order)
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select name="sort_by" onChange={this.handleChange}>
          <option value='created_at'>Date</option>
          <option value='comment_count'>Comment Count</option>
          <option value='votes'>Votes</option>
        </select>
        <select name="order" onChange={this.handleChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
        <button>SORT</button>
      </form>
    );
  }
}

export default Sorter;