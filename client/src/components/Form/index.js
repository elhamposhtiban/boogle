import React from "react";
import "./style.css";

export function SearchForm(props) {
    return (
        <div className="form-group form-searcch">
          <label className ="search-label" htmlFor="book-search">Search For Any book You Want</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="book-search"
            list="book-searchs"
            type="text"
            className="form-control"
            placeholder="Type in a book name to begin"
            id="book-search"
            {...props}
          />
        </div>
      
    );
  }

export function FormBtn(props) {
  return (
    <button {...props}  className="btn btn-success search-btn">
      {props.children}
    </button>
  );
}