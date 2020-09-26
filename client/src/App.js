import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import home from "./components/home";
import login from "./components/login";
import notFound from "./components/notFound";
import signup from "./components/signup";

export default class App extends Component{

  render(){

    //JSX
    return(
        <div className="container">
            <Router>
    <Switch>
    <Route path ="/" component={home}/>
    <Route path ="/login" component={login}/>
    <Route path ="/signup" component={signup}/>
    <Route path ="*" component={notFound}/>
    </Switch>
            </Router>
        </div>
    )
  }

}
