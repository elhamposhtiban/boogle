import React from "react";

function SearchForm(props) {
    return (
      <form className="search form-searcch">
        <div className="form-group">
          <label htmlFor="book-search">Search For Any book You Want</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="book-search"
            list="book-searchs"
            type="text"
            className="form-control"
            placeholder="Type in a book name to begin"
            id="book-search"
          />
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }


export default SearchForm;
