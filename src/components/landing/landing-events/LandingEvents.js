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

const StyledEventsList = styled(Flex)`
  width: 80%;
  margin: auto;
`;

const StyledEvent = styled(Flex)`
  margin-top: 1rem;
`;

const StyledEventImage = styled.div`
  min-width: 250px;
  min-height: 250px;
  background-image: url(${props => props.src});
  background-size: 200%;
  background-position: center;
`;

const StyledEventLink = styled.a`
  margin-left: 1rem;
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
        <Flex flexDirection="column" pl={"0.5rem"} style={{ flexGrow: 1 }}>
          <h3 className="small-margin">{event.title}</h3>
          <p className="no-margin small bold">
            {moment(event.date).format("dddd, MMMM Do YYYY")} | {event.time}
          </p>
          <p className="no-margin small">{event.location}</p>
          <p className="no-margin small">{event.address}</p>
          <p className="medium">{event.details}</p>
          <Flex alignItems="center">
            {event.cost ? <h3>{event.cost}</h3> : <h3>Free!</h3>}
            {event.ticketLink ? (
              <StyledEventLink className="primary" href={event.ticketLink}>
                Tickets
              </StyledEventLink>
            ) : (
              <StyledEventLink className="primary">More Info</StyledEventLink>
            )}
          </Flex>
        </Flex>
      </StyledEvent>
    ));
  return (
    <StyledLandingEventsContainer flexDirection="column" px={2}>
      <h1 style={{ marginTop: "0" }}>Events</h1>
      {_.isEmpty(futureEvents) && (
        <p className="no-margin">
          We have no future events scheduled at the moment, but check back often
          as we update our events frequently! Check out some of our past events
          in the meantime...
        </p>
      )}
      {_.isEmpty(futureEvents) && (
        <StyledEventsList flexDirection="column">
          {mapEvents(pastEvents)}
        </StyledEventsList>
      )}
    </StyledLandingEventsContainer>
  );
};

export default LandingEvents;
