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

    )
}

export default SavedResults; 