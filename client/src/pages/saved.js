
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import SavedList from "../components/SavedList"

function Saved() {

    const [savedBooks, setSavedBooks] = useState([]);


    useEffect(() => {

       showSavedBooks();
      }, []);

    //function for handling saving the book which we want 
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

        <div>
            
         {savedBooks.length ? <SavedList savedBooks = {savedBooks} showSavedBooks = {showSavedBooks}
           /> : null}

        </div>
    )
}


export default Saved;

