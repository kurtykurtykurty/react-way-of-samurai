import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import style from "./index.module.css";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className={style.content}>
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
