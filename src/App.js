import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ContactForm from "./components/ReduxForm";
import style from "./index.module.css";
import { Provider } from "react-redux";
import store from "./reducers";
import Form from "./components/Form";
import Observer from "./components/Observer/observer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className={style.content}>
            <Route path="/profile" component={Profile} />
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/form" component={ContactForm} />
            <Route path="/myform" component={Form} />
            <Route path="/observer" component={Observer} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
