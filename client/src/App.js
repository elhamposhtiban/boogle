import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Books  from "./pages/book"
import Wrapper from "./components/Wrapper"
import SavedList from "./components/SavedList"


function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Books} />
          <Route exact path="/book" component={Books} />
          <Route exact path="/saved" component={SavedList} />
        </Wrapper>
      </div>
    </Router>

  );
}

export default App;
