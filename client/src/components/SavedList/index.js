import React from "react";
import PropType from "prop-types"
import API from "../../utils/API"

const propType = {

  savedBooks: PropType.array.isRequired,
  showSavedBooks: PropType.func.isRequired
    }

const SavedResults = ( {savedBooks}) => {
  

      //   //function for handling delete the book which we saved 
      //   const deleteHandler = event => {
      //     event.preventDefault();
      //     const savedId = event.target.getAttribute("data-unique-id");
      //     deleteSavedBook(savedId)
      // }
  
      
      // const deleteSavedBook = async (savedId) => {
      //   try {
      //     await API.deleteBook(savedId);
      //     showSavedBooks();
      //   } catch(error) {
      //     console.group("DELETE A BOOK");
      //     console.log(error);
      //     console.groupEnd();
      //   }
      // };

      
    return(
      <div className="card p-3">
        {console.log (savedBooks)}
      <h5 className="card-title">Saved Books</h5>

      <ul className="list-group">
      {savedBooks &&  ( savedBooks.map(item => (
      <li className="list-group-item mb-2" key={item._id}>
      <button className="btn btn-danger "  data-uniqe-id={item._id}>
              Remove Book
      </button>
          <h2>{item.title}</h2>
          <h5>{item.author}</h5>
          <div className="mt-2">
          <p className="img-fluid ">{item.description}</p>
          <img className="img-fluid " src={item.image} />
          </div>
      </li>
      )))}
      </ul>

  </div>
    )
}

SavedResults.prototype = propType;
export default SavedResults; 