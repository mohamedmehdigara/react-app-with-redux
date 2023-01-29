import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./component/Cart";
import React from "react";


function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;
