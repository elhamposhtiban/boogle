import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Books  from "./pages/book"
import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/Wrapper"
import SavedList from "./pages/saved"


function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/book" component={Books} />
          <Route exact path="/saved" component={SavedList} />
          <Router component = {NoMatch}/>
          </Switch>
        </Wrapper>
      </div>
    </Router>

  );
}

export default App;
