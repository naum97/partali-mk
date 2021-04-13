import React from "react";
import Layout from "./components/Layout/Layout";
import classes from "./App.module.css";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import AdminPage from "./pages/admin/AdminPage";
import AddProductPage from "./pages/admin/AddProductPage";
import ProductPage from ".//components/ProductPage/ProductPage"
const app = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/admin/add-product" exact component={AddProductPage} />
        <Layout>
          <main className={classes.Main}>
            <Route path="/" exact component={HomePage} />
            <Route path="/all-products" exact component={ProductsPage} />
            <Route path="/about-us" exact component={AboutPage} />
            <Route path="/contact-us" exact component={ContactUsPage} />
            <Route path="/product" exact component={ProductPage} />
          </main>
        </Layout>
      </Switch>
    </React.Fragment>
  );
};

export default app;
