import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  render() {
    const isAuthenticated = window.localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    //JSX
    return (
      <div className="row pt-5">
        <div className="col">
          <h1>Тестовое задание</h1>
        </div>
      </div>
    );
  }
}
