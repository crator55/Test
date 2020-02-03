import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/main.css";
import reminders from "./store/reducers/reminders";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";






const store = createStore(reminders, (applyMiddleware(thunk)));

const appShell = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(appShell, document.getElementById("root"));
registerServiceWorker();
