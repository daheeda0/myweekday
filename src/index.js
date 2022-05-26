import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"; //이거 안쓰면 app페이지 열었을때 오류남

ReactDOM.render(
  <BrowserRouter> 
  <App />
  </BrowserRouter>,//이거 안쓰면 app페이지 열었을때 오류남
  document.getElementById('root')
);


reportWebVitals();

