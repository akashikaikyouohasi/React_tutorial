import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  /* StrictModeとは厳格モード。 */
  <React.StrictMode>
    <App title="App"
      message="This is App Component!"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
