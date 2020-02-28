import React, {useState, useEffect} from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import {Col, Row, Container} from "../components/Grid";
import Form from "../components/Form"
import ResultList from "../components/ResultList";




const Books = () => {

    let [books, setBooks] = useState ([]);
    const [SearchInput, setSearchinput] = useState("");

    useEffect (()=> {
        loadBooks (SearchInput);
    }, []);

    const loadBooks = async (query) => {
        console.log(query)
        try {
            const response = await API.searchBook(query);
            setBooks(response.data.items)
        
        }catch (error) {
            console.group ("Load BOoOOOks");
            console.log(error)
            console.groupEnd();
        }
    };
        //function for handling the search input
        const  handleInputChange = event => {
            const { value } = event.target;
            setSearchinput(
                 value
            );
      
          };
      
          //function for handling the search button
          const handleFormSubmit = event => {
            event.preventDefault();
            setSearchinput();
            loadBooks(SearchInput);
          };


      return (
        <div>
            <Container>
                <Row>
                    <Col size="ms-5 md-7">
                        <Form
                        SearchInput = {SearchInput}
                        handleInputChange = {handleInputChange}
                        handleFormSubmit = {handleFormSubmit}
                        />
                    </Col>
                    <Col size="ms-7 md-5"></Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    {books.length ?<ResultList books={books} />: null}
                    </Col>
                </Row>
    
            </Container>

        </div>


      )

    }

export default Books;


