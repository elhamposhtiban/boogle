import React from "react"
import PropType from "prop-types"
import API from "../../utils/API"
const propType = {

    books : PropType.array.isRequired
      }
const Card = ({books}) => {
     
    const saveToDB = async (event) => {

        //giving the unique id to each book for storing in DB
        const id = event.target.getAttribute("data-unique-id");
        const saveBook = books.filter(book => book.id === id);
        const saveBookObj =  
                {
                    "title": saveBook[0].volumeInfo.title,
                    "author":saveBook[0].volumeInfo.authors,
                    "description": saveBook[0].volumeInfo.description,
                    // "image": saveBook[0].volumeInfo.imagesLinks.thumbnail,
                    "link": saveBook[0].volumeInfo.canonicalVolumeLink
                }
                console.log (saveBookObj)
                try {
                    await API.saveBook(saveBookObj);
                  } catch(error) {
                    console.group("yeaaa you saved the boooook!!!");
                    console.log(error);
                    console.groupEnd();
                  }
         
    }


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
                            {/* { book.volumeInfo.imagesLinks &&
                            (<img src= {book.volumeInfo.imageLinks.thumbnail}/>)} */}
                        <img className="img-fluid float-left" 
                        src= {book.volumeInfo.imagesLinks ?
                            book.volumeInfo.imagesLinks.thumbnail : "no image"}/>

                        <a className="btn " href={book.volumeInfo.canonicalVolumeLink}> see more</a>
                        <button className="btn btn-success" data-unique-id={book.id} onClick= {saveToDB}>save</button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
   
   ) }
             
Card.prototype = propType;
export default Card



