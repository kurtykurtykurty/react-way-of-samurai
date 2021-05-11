import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
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
                            return <Profile />;
                        }}
                    />
                    <Route
                        path="/dialogs"
                        render={() => {
                            return <DialogsContainer />;
                        }}
                    />
                    <Route
                        path="/users"
                        render={() => {
                            return <UsersContainer />;
                        }}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
