import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReduser from './sidebarReduser';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReduser,
});

const store = createStore(reducers);

export default store;

window.store = store;
