import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import style from "./index.module.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className={style.content}>
          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.appState.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.appState.dialogsPage} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
