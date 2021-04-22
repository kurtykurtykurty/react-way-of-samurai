import rerenderEntireTree from "../render";
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "hello, pidor", likesCount: "0" },
      { id: 2, message: "my secod post", likesCount: "0" },
    ],
    newPostText: "",
  },
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Joka",
      },
      {
        id: 2,
        name: "Boka",
      },
    ],
    messages: [
      { id: 1, message: "hi" },
      { id: 2, message: "wooohooo" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: "9",
  };

  state.profilePage.posts.push(newPost);
  updateNewPostText("");
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
