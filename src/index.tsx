import React from "react";
import ReactDOM from "react-dom";
import { initializeApp } from "firebase/app";

import Theme from "./Theme";
import { AppStoreProvider } from "./Context";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const firebaseConfig = {
  apiKey: "AIzaSyCtFTXPRQgYN0DaBPg_eslf5hnm53m-z7U",
  authDomain: "magic-quadrant-80769.firebaseapp.com",
  projectId: "magic-quadrant-80769",
  storageBucket: "magic-quadrant-80769.appspot.com",
  messagingSenderId: "1076282405109",
  appId: "1:1076282405109:web:44b78dc1eb97c3243e55bc",
  measurementId: "G-8W071LGJH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <AppStoreProvider>
      <Theme>
        <App />
      </Theme>
    </AppStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
