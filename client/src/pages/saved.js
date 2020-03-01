
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SavedList from "../components/SavedList"

function Saved() {

    const [savedBooks, setSavedBooks] = useState([]);


    useEffect(() => {

       showSavedBooks();
      }, []);

    //function for showing the saving books
      const showSavedBooks = async () => {
        try {
          const response = await API.getBooks();
          setSavedBooks(response.data);
          console.log("this is what i can see in db", setSavedBooks(response.data))
          console.log("show me my booookk", savedBooks)
        } catch (error) {
          console.group("show meee save boookksss");
          console.log(error);
          console.groupEnd();
        }
      };

    //function for handling delete the book which we saved 
        const deleteHandler = event => {
          event.preventDefault();
          const savedId = event.target.getAttribute("data-unique-id");
          deleteSavedBook(savedId)
      }
  
      
      const deleteSavedBook = async (savedId) => {
        try {
          await API.deleteBook(savedId);
          showSavedBooks();
        } catch(error) {
          console.group("DELETE A BOOK");
          console.log(error);
          console.groupEnd();
        }
      };
      


    return(

    <div>
    
    {savedBooks.length ? 
    <SavedList 
    savedBooks = {savedBooks}
    deleteHandler ={deleteHandler}
    showSavedBooks = {showSavedBooks}
    /> : null}

    </div>
    )
}


export default Saved;

