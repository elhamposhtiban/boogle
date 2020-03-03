import React from "react";
import PropType from "prop-types"


const propType = {

  savedBooks: PropType.array.isRequired,
  showSavedBooks: PropType.func.isRequired,
  deleteHandler: PropType.func.isRequired
    }

const SavedResults = ( {savedBooks, deleteHandler }) => {

      
    return(
      <div className="card p-3">
            {console.log ("this is a save boookkk", savedBooks)}
          <h5 className="card-title">Saved Books</h5>

        <ul className="list-group">

          {savedBooks.length>0 && savedBooks.map(item => (
          <li className="list-group-item mb-2" key={item._id}>
        {console.log ("this is a second console log for book ", savedBooks)}
          <button className="btn btn-danger " 
          onClick={deleteHandler}  
          data-unique-id={item._id}>
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

SavedResults.prototype = propType;
export default SavedResults; 