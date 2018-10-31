import React, { Component } from "react";

import { GlobalStyle } from "./styles";
import Header from "./components/layout/header/Header";
import Messages from "./components/messages/Messages";
import LandingImage from "./components/landing/landing-image/LandingImage";
import LandingAbout from "./components/landing/landing-about/LandingAbout";
import LandingMission from "./components/landing/landing-mission/LandingMission";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Messages />
        <LandingImage />
        <LandingAbout />
        <LandingMission />
      </div>
    );
  }
}

export default App;
