import React, { useState, useEffect } from "react";
import API from "../../utils/API";


const SavedResults = () => {

    const [savedBooks, setSavedBooks] = useState([]);


    useEffect(() => {
       showSavedBooks();
      }, []);

      const showSavedBooks = async () => {
        try {
          const response = await API.getBooks();
          setSavedBooks(response.data);
        } catch (error) {
          console.group("show meee save boookksss");
          console.log(error);
          console.groupEnd();
        }
      };


    return(
      <div className="card p-3">
      <h5 className="card-title">Saved Books</h5>

      <ul className="list-group">
      {savedBooks.map(item => (
      <li className="list-group-item mb-2" key={item.id}>
      <button className="btn btn-danger " data-uniqe-id={item.id}>
              Remove Book
      </button>
          <h2>{item.title}</h2>
          <h5>{item.author}</h5>
          <div className="mt-2">
          <p className="img-fluid ">{item.description}</p>
          <img className="img-fluid " src={item.image} />
          </div>
      </li>
      ))}
      </ul>

  </div>
    )
}

export default SavedResults; 