import "./App.css";
import Dialogs from "./components/Dialogs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import style from "./index.module.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className={style.content}>
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
