import React from 'react';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Wrapper from "./components/Wrapper"


function App() {
  return (
    <React.Fragment>
    <Navbar/>
   <Wrapper>
    <Form/>
  </Wrapper>
  </React.Fragment>
  );
}

export default App;
