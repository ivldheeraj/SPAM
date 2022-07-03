import React from "react";
import PostDetail from "./PostDetail";
import { useSelector } from "react-redux";
function PostList() {
    const { posts } = useSelector(state => state)
    return (
    <div className="container">
      <div className="row">
        {posts &&
          posts.map((post) => 
            <PostDetail post={post} key={post.id} />
          )
        }
      </div>
    </div>
  );
}

export default PostList;
