import "./App.css";
import AboutPage from "./components/AboutPage.js/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer";
import Landingpage from "./components/Landingpage/Landingpage";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    <Switch>
    <Route path='/' exact component={Landingpage}/>
    <Route path='/About' exact component={AboutPage}/>
    <Route path='/Contact' exact component={ContactPage} />

      </Switch>
      <Footer />
    </div></Router>
  );
}

export default App;
