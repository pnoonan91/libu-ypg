import React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

import { StyledCaption } from "../layout/Caption";
import BannerImage from "../image/BannerImage";
import LandingEvents from "../landing/landing-events/LandingEvents";

const events = "Events";

const eventPurpose =
  "Come for a good time. Stay for the lasting impact. 100% of event proceeds benefit children living in Illinois foster care.";

//
// --- Styled Components ---
const StyledSponsorAnEvent = styled(Flex)`
  background-color: ${props => props.theme.colors.lightPink};
  justify-content: center;
  padding: 1rem;
`;

//
// --- Events Page ---
const Events = props => {
  return (
    <div>
      <BannerImage image="/images/events.jpeg" tagline={events} />
      <StyledCaption>{eventPurpose}</StyledCaption>
      <LandingEvents noHeader />
      <StyledSponsorAnEvent>
        <h2>
          Interested in sponsoring an event? Send us a note at{" "}
          <a
            className="pink"
            href="mailto:letitbeusypg@gmail.com"
            style={{ textDecoration: "underline" }}
          >
            letitbeusypg@gmail.com!
          </a>
        </h2>
      </StyledSponsorAnEvent>
    </div>
  );
};

export default Events;
