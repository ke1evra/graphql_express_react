import PostItem from './postItem';
import React from "react";

export default function PostList({posts}) {
    console.log(posts);
    return(
        <div>
            {
                posts.map(post =>{
                    return <PostItem post={post} key={post.id}/>
                })
            }
        </div>
    )
}
