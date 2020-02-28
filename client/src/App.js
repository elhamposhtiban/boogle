import React from 'react';
import Navbar from "./components/Navbar";
import Books  from "./pages/book"
import Wrapper from "./components/Wrapper"
// import Form from "./components/Form/index"


function App() {
  return (
    <React.Fragment>
    <Navbar/>
   <Wrapper>
     <Books/>
  </Wrapper>
  </React.Fragment>
  );
}

export default App;
