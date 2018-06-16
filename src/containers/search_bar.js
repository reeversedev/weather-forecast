import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "" // short form of 'search term'
    };
  }

  onInputChange = event => {
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    });
  };
  onFormSubmit = event => {
    event.preventDefault();

    // We need to go and fetch weather data
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forcast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="button" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
