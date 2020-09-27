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
    const host = window.location.hostname || 'localhost';
    axios({
      url: `http://${host}:8080/api`,
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
        this.setState({post: post.data.data.post});
      })
      .catch(e => console.log(e))
      .finally(()=> this.setState({isLoading: false}))
  }
  componentDidMount() {
    this.getPost(this.props.match.params.id);
  }


  render() {

    const isAuthenticated = window.localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    if(!this.state.isLoading && !this.state.post){
      return <Redirect to="/404"/>
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
                <p><img src={this.state.post.img} className="img-fluid" alt=""/></p>
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
