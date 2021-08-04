import {
    applyMiddleware,
    combineReducers,
    createStore,
    compose,
} from 'redux';
import thunkMiddlewere from 'redux-thunk';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReduser from './sidebarReduser';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReduser,
    usersPage: usersReducer,
    auth: authReducer,
});
/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddlewere)),
);
/* eslint-disable */
export default store;

window.store = store;
