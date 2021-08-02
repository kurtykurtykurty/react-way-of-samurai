import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddlewere from 'redux-thunk';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReduser from './sidebarReduser';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReduser,
    usersPage: usersReducer,
    auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddlewere));

export default store;

window.store = store;
