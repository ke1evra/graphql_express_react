import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import PostList from "./postList";

export default class Home extends Component {
  state = {
    posts: null
  };

  getPosts(){
    axios({
      url: "http://localhost:8080/api",
      method: "POST",
      data: {
        query: `{
          posts {
            id
            title
            descriptionShort
            img
          }
        }
      `
      },
    }).then((data)=>{
      this.setState({posts: data})
    }).catch(e => console.log(e));
  }

  render() {
    this.getPosts();
    const isAuthenticated = window.localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }



    //JSX
    return (
      <div className="row pt-5">
        <div className="col">
          <h1>Тестовое задание</h1>
          {this.state.posts &&
            <PostList posts={this.state.posts}/>
          }

        </div>
      </div>
    );
  }
}
