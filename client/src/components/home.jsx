import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import PostList from "./postList";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isLoading:true
    }
  }

  getPosts(){
    axios({
      url: "http://localhost:8080/api",
      method: "POST",
      data: {
        query: `{
          posts{
            id
            title
            descriptionShort
            img
          }
        }`
      },
    })
      .then((posts)=>{
        this.setState({posts: posts.data.data.posts, isLoading: false});
      })
      .catch()
  }
  componentDidMount() {
    this.getPosts();
  }


  render() {

    const isAuthenticated = window.localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }



    //JSX
    return (
      <>
      {!this.state.isLoading &&
          <div className="row pt-5">
            <div className="col">
              <h1>Аквариумные рыбки</h1>
              <PostList posts={this.state.posts}/>
            </div>
          </div>
      }</>

    );
  }
}
