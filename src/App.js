import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import style from './index.module.css';

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
