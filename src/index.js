import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';

const options = {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
}

posthog.init('phc_zLY8vl7oYOdcyvM8NN5D2J8fQwHxpK9QGRHcvHOSioX', {
  api_host: 'https://app.posthog.com' })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostHogProvider 
      apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY}
      options={options}
    >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PostHogProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
