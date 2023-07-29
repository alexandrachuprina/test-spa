import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);



  // const draft = () => {
  //   let body = "Hi it is me oh nooo too many words";
  //   let array = [20, 21, 22];
  //   let span = "";

  //   for (let i = 0; i < body.length; i++) {
  //     for (let j = 0; j < array.length; j++) {
  //       if (i === array[j]) {
  //         let part = body[i];
  //         span = span + part;
  //       }
  //       return <p>{span}</p>
  //     }
  //   }
  //   return null
  // };
  // draft();
