import React from 'react';
import ReactDOM from 'react-dom/client';
// components
import App from './components/App';
// styles
import "./styles/index.css";
// store
import { store } from "./redux/store";
// redux
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
