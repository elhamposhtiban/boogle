import React from "react"
import PropType from "prop-types"
const propType = {

    books : PropType.array.isRequired
      }
const Card = ({books}) => {
    return (
<div className="card p-3">
  <div className="card-title"><h5>Search Results</h5></div>
  <div className="card-body">
      <ul className="list-group">
        {books.map(book => (
          <li className="list-group-item" key={book.id}>
              <h2>{book.volumeInfo.title}</h2>
              <h4>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}</h4>
              <p className="img-fluid float-left">{book.volumeInfo.description}</p>
                 {/* {book.volumeInfo.imagesLinks &&
                 (<img src= {book.volumeInfo.imageLinks.smallThumbnail}/>)} */}
              <img className="img-fluid float-left" src= {book.volumeInfo.imagesLinks ?
                 book.volumeInfo.imagesLinks.thumbnail : "no image"}/>

              <a className="btn " href={book.volumeInfo.canonicalVolumeLink}> see more</a>
              <button className="btn btn-success">save</button>
          </li>
        ))}
      </ul>
  </div>
</div>
    )
}
Card.prototype = propType;
export default Card