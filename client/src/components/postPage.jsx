import React, { Component } from "react";
import nl2br from 'react-nl2br';
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class postPage extends Component {
  constructor({id}) {
    super();
    this.state = {
      post: null,
      isLoading: true
    }
  }

  getPost(postId){
    axios({
      url: "http://localhost:8080/api",
      method: "POST",
      data: {
        query: `{
          post(id: ${postId}){
            id
            title
            descriptionShort
            descriptionLarge
            img
          }
        }`
      },
    })
      .then((post)=>{
        console.log(post.data.data.post);
        this.setState({post: post.data.data.post, isLoading: false});
      })
      .catch()
  }
  componentDidMount() {
    this.getPost(this.props.match.params.id);
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
        <div className="row py-5">
          <div className="col">
            <div className="row">
              <div className="col">
                <h1>{this.state.post.title}</h1>
                <p><a href="/" className="btn btn-primary">&larr; Назад</a></p>
                <p><img src={this.state.post.img} alt=""/></p>
                <p>{this.state.post.descriptionShort}</p>
                <p>{nl2br(this.state.post.descriptionLarge)}</p>
              </div>
            </div>
          </div>
        </div>
        }</>

    );
  }
}