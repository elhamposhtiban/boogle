import React from "react";
import PropType from "prop-types"


const propType = {

  savedBooks: PropType.array.isRequired,
  showSavedBooks: PropType.func.isRequired,
  deleteHandler: PropType.func.isRequired
    }

const SavedResults = ( {savedBooks}, deleteHandler ) => {

      
    return(
      <div className="card p-3">
            {console.log ("this is a save boookkk", savedBooks)}
          <h5 className="card-title">Saved Books</h5>

        <ul className="list-group">

          {savedBooks.legnth && savedBooks.map(savebook => (
          <li className="list-group-item mb-2" key={savebook._id}>
        {console.log ("this is a second console log for book ", savedBooks)}
          <button className="btn btn-danger " 
          onClick={deleteHandler}  
          data-uniqe-id={savebook._id}>
                  Remove Book
          </button>

          <h2>{savebook.title}</h2>
          <h5>{savebook.author}</h5>

          <div className="mt-2">
              <p className="img-fluid ">{savebook.description}</p>
              <img className="img-fluid " src={savebook.image} />
          </div>
          </li>
          ))}
        </ul>

      </div>
    )
}

SavedResults.prototype = propType;
export default SavedResults; 