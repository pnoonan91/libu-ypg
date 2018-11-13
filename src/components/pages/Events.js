import React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

import BannerImage from "../image/BannerImage";
import { StyledCaption } from "../layout/Caption";

const events = "Events";

const eventPurpose =
  "Come for a good time. Stay for the lasting impact. 100% of event proceeds benefit children living in Illinois foster care.";

//
// --- Styled Components ---

//
// --- Events Page ---
const Events = props => {
  return (
    <div>
      <BannerImage image="/images/events.jpeg" tagline={events} />
      <StyledCaption>{eventPurpose}</StyledCaption>
    </div>
  );
};

export default Events;
