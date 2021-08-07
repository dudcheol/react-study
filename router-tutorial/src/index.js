import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// BrowserRouter
// HTML5의 History API를 사용하여 페이지를 새로고침하지 않고도 주소를 변경하고,
// 현재 주소에 관련된 정보를 props로 쉽게 조회하거나 사용할 수 있도록 해줌
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
