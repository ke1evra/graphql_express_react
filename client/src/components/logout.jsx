import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  render() {
    const isAuthenticated = window.localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      window.localStorage.removeItem("isAuthenticated");
      window.localStorage.removeItem("username");
      window.location.reload(false);
      return null;
    } else {
      //JSX
      return <Redirect to="/login" />;
    }
  }
}
