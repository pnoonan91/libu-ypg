import React from "react";

import LandingImage from "../landing/landing-image/LandingImage";
import LandingAbout from "../landing/landing-about/LandingAbout";
import LandingMission from "../landing/landing-mission/LandingMission";
import LandingEvents from "../landing/landing-events/LandingEvents";
import LandingSuccess from "../landing/landing-success/LandingSuccess";
import LandingVolunteer from "../landing/landing-volunteer/LandingVolunteer";
import LandingInstagram from "../landing/landing-instagram/LandingInstagram";

const LandingPage = props => (
  <div>
    <LandingImage />
    <LandingAbout />
    <LandingMission />
    <LandingEvents />
    <LandingSuccess />
    <LandingVolunteer />
    <LandingInstagram />
  </div>
);

export default LandingPage;
