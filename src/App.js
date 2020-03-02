import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Form from "./Components/Form";


function App() {
  return (
    <div className="App">
    <BrowserRouter basename={'/products'}>
            <Switch>
              <Route
              exact
              path="/"
              component={Form}
              />
            </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
