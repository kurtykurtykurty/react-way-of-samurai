let state = {
  profilePage: {
    posts: [
      { id: 1, message: "hello, pidor", likesCount: "0" },
      { id: 2, message: "my secod post", likesCount: "0" },
    ],
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

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: "9",
  };

  state.profilePage.posts.push(newPost);
  debugger;
};

export default state;
