import React from "react";
import Layout from "./components/Layout/Layout";
import classes from "./App.module.css";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
const app = () => (
  <Layout>
    <main className={classes.Main}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/all-products" exact component={ProductsPage} />
        <Route path="/about-us" exact component={AboutPage} />
        <Route path="/contact-us" exact component={ContactUsPage} />
      </Switch>
    </main>
  </Layout>
);

export default app;
