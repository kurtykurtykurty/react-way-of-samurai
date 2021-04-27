const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

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
      newMessageBody: "",
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: "8",
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this.updateNewPostText("");
  //   this._callSubscriber(this._state);
  // },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: "8",
      };
      this._state.profilePage.posts.push(newPost);
      this.updateNewPostText("");
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === "SEND_MESSAGE") {
      const body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      const newMessage = {
        id: 3,
        message: body,
      };
      this._state.dialogsPage.messages.push(newMessage);
      debugger;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const updateNewMessageBodyActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};
export const sendNewMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export default store;

window.store = store;
