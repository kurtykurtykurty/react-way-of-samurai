import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import style from './index.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className={style.content}>
          <Route
            path="/profile"
            render={() => {
              <Profile />;
            }}
          />
          <Route
            path="/dialogs"
            render={() => {
              <DialogsContainer />;
            }}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
