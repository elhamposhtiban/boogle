import axios from "axios";

export default {

    searchBook : (query) => {
        console.log('query', query)
        const APIKEY ="AIzaSyBPkSAQ-3irVlA5KD_PCdKiqClED5kv1Ng"
       const BaseURL = "https://www.googleapis.com/books/v1/volumes?q=";
       return axios.get(BaseURL + query +"&key="+ APIKEY)
   } ,
   
    // Gets all books
    getBooks: () => {
        return axios.get("/api/saved");
    },

    // Gets the book with the given id
    getBook: (id) => {
        return axios.get("/api/books/" + id);
    },

    // Deletes the book with the given id
    deleteBook: (id) => {
        return axios.delete("/api/books/" + id);
    },
    
    // Saves a book to the database
    saveBook: (bookData) =>{
        console.log('save book', bookData)
        return axios.post("/api/books", bookData);
    },

 }
 

