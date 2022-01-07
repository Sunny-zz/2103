import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd';
// import reportWebVitals from './reportWebVitals';
import zhCn from 'antd/lib/locale/zh_CN'

ReactDOM.render(
  <Router>
    <ConfigProvider locale={zhCn}>
      <App />
    </ConfigProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
