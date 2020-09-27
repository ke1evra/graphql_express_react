import React from 'react';

export default function PostItem({post}) {
    return (

          <div className="row mb-3">
              <div className="col border border-dark rounded py-3">
                  <div className="row">
                      <div className="col-md-3">
                          <img className="img-fluid" src={post.img} alt=""/>
                      </div>
                      <div className="col-md-9">
                          <h3>{post.title}</h3>
                          <p>{post.descriptionShort}</p>
                          <a href={`/post/${post.id}`} className="btn btn-primary">Подробнее &rarr;</a>
                      </div>
                  </div>
              </div>
          </div>

    )
}
