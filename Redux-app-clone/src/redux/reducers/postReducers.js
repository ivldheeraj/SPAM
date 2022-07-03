const initialState = {
  posts: [
    { id: 1, title: "React", content: "This is React Post" },
    // { id: 2, title: "Java", content: "This is Java Post" }
  ],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      const newPost = state.posts.filter((post) => post.id !== action.id);
      return {
        posts: newPost,
      };
    case "ADD_POST":
      return {
        posts: [action.post, ...state.posts],
      };
    default:
      return state;
  }
};

export default postReducer;
