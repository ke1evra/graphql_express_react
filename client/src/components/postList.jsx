import PostItem from './postItem';
import React from "react";

export default function PostList({posts}) {
    return(
        <ul>
            {
                posts.map(post =>{
                    return <PostItem post={post}/>
                })
            }
        </ul>
    )
}
