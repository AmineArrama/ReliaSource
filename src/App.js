import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import IndexComponent from './Component/IndexComponent.js';
import Search from './Component/Search.js';
import Menu from './Menu.js';
import { TransitionGroup,CSSTransition } from 'react-transition-group'


class App extends Component {
  render() {
    return (

<div className="App">
      <Router>
<Route render={({location})=>console.log(location) || (
<div>
  <Menu />

  <TransitionGroup>
    <CSSTransition
    key={location.key}
    timeout={500}
    classNames='fade'
    >
      <Switch >
        <Route exact path="/">
          <IndexComponent />
        </Route>
        <Route path="/Search">
          <Search />
        </Route>
      </Switch>
    </CSSTransition>
  </TransitionGroup>

</div>
)} />
    </Router>
    </div>

    );
  }
}

export default App;
