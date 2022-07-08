import React from 'react';
import ReactDOM from 'react-dom/client';
import {Game} from "./containers/Game";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
