import React from "react";
import { Switch, Route } from "react-router-dom";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}
