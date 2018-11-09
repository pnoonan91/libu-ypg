import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./styles";
import Header from "./components/layout/header/Header";
import Messages from "./components/messages/Messages";
import Footer from "./components/layout/footer/Footer";
import SubFooter from "./components/layout/footer/SubFooter";
import LandingPage from "./components/pages/LandingPage";
import About from "./components/pages/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Messages />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
        </Switch>

        <SubFooter />
        <Footer />
      </div>
    );
  }
}

export default App;
