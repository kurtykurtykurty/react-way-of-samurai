import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReduser from "./sidebarReduser";

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
    sidebar: {},
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
