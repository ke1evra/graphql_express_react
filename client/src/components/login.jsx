import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    axios({
      url: "http://localhost:8080/login",
      method: "POST",
      data: {
        username,
        password,
      },
    })
      .then((res) => {
        window.localStorage.setItem(
          "isAuthenticated",
          res.data.isAuthenticated
        );
        window.localStorage.setItem("username", res.data.user.username);
        window.location.reload(false);
      })
      .catch((e) => {
        this.setState({
          errorMessage: e.response.data.message,
        });
      });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const isAuthenticated = window.localStorage.getItem("isAuthenticated");

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    //JSX
    return (
      <div className="row">
        <div className="col-sm-6 col-md-5 col-lg-4 mx-auto py-5">
          <h1>Авторизация</h1>
          <div className="bg-dark text-white p-3 my-5 rounded">
            <p>Рабочая комбинация:</p>
            <ul className="list-unstyled">
              <li>TestUser</li>
              <li>SuperPass2020</li>
            </ul>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Логин</label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                name="username"
                title="Введите логин"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                className="form-control"
                id="password"
                title="Введите пароль"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Войти
            </button>
            {this.state.errorMessage && (
              <p className="bg-warning p-3 rounded my-3">
                {this.state.errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }
}
