import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addPost } from '../redux/actions/PostActions';

function AddPost() {
  const [post,setPost] = useState({
    id:'',
    title:'',
    content:''
  })
  const dispatch = useDispatch();

  const handleChange =(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addPost(post));
    setPost({
      id: uuidv4(),
      title: "",
      content: "",
    })
    console.log(post)
  }
  return (
    <div className="container" style={{margin:'4rem auto'}}>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="postTitle">Title</label>
          <input type="text" name="title" 
          value={post.title || ""}
           onChange={handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="postContent">Content</label>
          <textarea name="content" className="materialize-textarea"
          onChange={handleChange} 
          value={post.content || ""}/>
        </div>
        <div className="input-field">
          <button className="btn blue">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
