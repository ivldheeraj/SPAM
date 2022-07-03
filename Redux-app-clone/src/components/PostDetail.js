import React from "react";
import { useDispatch } from "react-redux";
import {deletePost} from '../redux/actions/PostActions'
function PostDetail({post}) {
    const dispatch = useDispatch();

  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>
            {post.content}
        </p>
        </div>
        <div className="card-action">
          <button className="btn red"
           onClick={() => dispatch(deletePost(post.id))}
          >Delete</button>&nbsp;&nbsp;
         
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
