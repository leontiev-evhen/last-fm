import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/Home';
import Track from './views/Track';
import NotFound from './views/NotFound';

const App = () =>  (
  <Router>
    <div className="container">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/track/:id" component={ Track } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  </Router>
);

export default App;
