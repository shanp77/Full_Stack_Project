import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

// class Root extends React.Component {

//   render
// }

const Root = ( { store } ) => (
  <div className="outer">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
     
    
  </div>
);

export default Root;
