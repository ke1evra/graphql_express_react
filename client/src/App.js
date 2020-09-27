import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./components/home";
import login from "./components/login";
import notFound from "./components/notFound";
import Navbar from "./components/navbar";
import logout from "./components/logout";
import postPage from "./components/postPage";

export default class App extends Component {



  render() {

    //JSX
    return (
      <Router>
        <Navbar />
        <div className="container h-100">
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/login" component={login} />
            <Route path="/logout" component={logout} />
            <Route path="/post/:id" component={postPage} />
            <Route path="/404" component={notFound} />
            <Route path="*" component={notFound} />

          </Switch>
        </div>
      </Router>
    );
  }
}
