import React, { lazy, Suspense } from "react";
import { Skeleton } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./page/home"));
const Watch = lazy(() => import("./page/watch"));
const Login = lazy(() => import("./page/login"));
const HeadPhone = lazy(() => import("./page/accessory/headPhone"));
const PhoneCharge = lazy(() => import("./page/accessory/phoneCharge"));
const MacBook = lazy(() => import("./page/macbook"));
const Iphone = lazy(() => import("./page/iphone"));
const Ipad = lazy(() => import("./page/ipad"));
const Cart = lazy(() => import("./page/cart"));

function App(props) {
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/iphone">
            <Iphone />
          </Route>
          <Route path="/macbook">
            <MacBook />
          </Route>
          <Route path="/ipad">
            <Ipad />
          </Route>
          <Route path="/headphone">
            <HeadPhone />
          </Route>
          <Route path="/phonecharger">
            <PhoneCharge />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/watch">
            <Watch />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
