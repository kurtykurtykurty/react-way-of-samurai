let store = {
  _callSubscriber() {
    console.log("subscriber");
  },

  _state: {
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
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  //   setState(value) {
  //     this._state = value;
  //     this._subscriber();
  //   },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: "8",
    };
    this._state.profilePage.posts.push(newPost);
    this.updateNewPostText("");
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
