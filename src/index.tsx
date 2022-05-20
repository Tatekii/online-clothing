import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { RootStoreProvider } from "./store";
// import { GQLClient } from "./apollo/apollo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      {/* <GQLClient> */}
      <ChakraProvider>
        <RootStoreProvider>
          <App />
        </RootStoreProvider>
      </ChakraProvider>
      {/* </GQLClient> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
