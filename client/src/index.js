// import React from 'react';
// import { createRoot } from 'react-dom/client';
// //import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware,compose} from 'redux';
// import thunk from 'redux-thunk';
// import Reducers from './reducers';


// const store = createStore(Reducers,compose(applyMiddleware(thunk)));

// createRoot(document.getElementById('root')).render(<Provider store={store}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </Provider>,
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';

const store = createStore(Reducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

