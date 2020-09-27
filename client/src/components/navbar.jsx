import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const isAuthenticated = window.localStorage.getItem("isAuthenticated");
    const username = window.localStorage.getItem("username");

    if (!isAuthenticated) {
      return null;
    }
    //JSX
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">{username}</span>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="logout" title="Выйти из системы">
                Выход
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
