import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/layout";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Layout />
          </Route>
          {/* <Redirect path="*" to="/" /> */}
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
