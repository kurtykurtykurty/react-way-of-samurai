import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import style from './index.module.css';
import Login from './components/Login/Login';
import Hook from './components/Hook';

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />

                <div className={style.content}>
                    <Route
                        path="/profile/:userId?"
                        render={() => {
                            return <ProfileContainer />;
                        }}
                    />
                    <Route
                        path="/dialogs"
                        render={() => {
                            return <DialogsContainer />;
                        }}
                    />
                    <Route
                        path="/users/:currentPage?"
                        render={() => {
                            return <UsersContainer />;
                        }}
                    />
                    <Route
                        path="/login"
                        render={() => {
                            return <Login />;
                        }}
                    />
                    <Route
                        path="/redirect"
                        render={() => {
                            return <DialogsContainer />;
                        }}
                    />
                    <Route
                        path="/hook"
                        render={() => {
                            return <Hook />;
                        }}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
