import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';
import { createUser } from './utils/session_utils';


window.createUser = createUser;


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let preLoadedState;

  if (window.currentUser) {
    preLoadedState = {
      session: {
        id: window.currentUser.id
      },
      entities: {
        users: {
          [currentUser.id]: window.currentUser
        }
      }
    };
  }
  const store = createStore(preLoadedState);
  window.store = store;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});


