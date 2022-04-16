import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Quizprovider } from 'context/quizContext';


ReactDOM.render(
  <React.StrictMode>
    <Quizprovider>
      <App />
    </Quizprovider>
  </React.StrictMode>,
  document.getElementById('root')
);

