import * as React from "react";
import * as moment from "moment";
import * as _ from "lodash";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

import { events } from "../../../data/events";

//
// --- Styled Components ---
const StyledLandingEventsContainer = styled(Flex)`
  margin: auto;
  max-width: ${props => props.theme.elementSizes.siteWrap};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledEvent = styled(Flex)`
  margin-top: 1rem;
`;

const StyledEventImage = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${props => props.src});
  background-size: 200%;
  background-position: center;
`;
//
// --- Landing Events Component ---
const LandingEvents = props => {
  const futureEvents = events.filter(event => moment(event.date) > moment());
  const pastEvents = events
    .filter(event => moment(event.date) < moment())
    .reverse();
  console.log(futureEvents);
  console.log(pastEvents);

  const mapEvents = events =>
    events.map(event => (
      <StyledEvent>
        <StyledEventImage src={event.image} />
        <Flex flexDirection="column" pl={"0.5rem"}>
          <h3 className="small-margin">{event.title}</h3>
          <p className="no-margin">
            {moment(event.date).format("dddd, MMMM Do YYYY")} | {event.time}
          </p>
          <p className="no-margin">{event.location}</p>
          <p className="no-margin">{event.address}</p>
        </Flex>
      </StyledEvent>
    ));
  return (
    <StyledLandingEventsContainer flexDirection="column">
      <h1>Events</h1>
      {_.isEmpty(futureEvents) && (
        <div>
          <p className="no-margin">
            We have no future events scheduled at the moment, but check back
            often as we update our events frequently! Check out some of our past
            events in the meantime...
          </p>
          {mapEvents(pastEvents)}
        </div>
      )}
    </StyledLandingEventsContainer>
  );
};

export default LandingEvents;
