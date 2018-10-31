import * as React from "react";
import * as moment from "moment";
import * as _ from "lodash";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";

import { events } from "../../../data/events";
import { breakpointMappings } from "../../../styles";

//
// --- Styled Components ---
const StyledLandingEventsContainer = styled(Flex)`
  margin: auto;
  max-width: ${props => props.theme.elementSizes.siteWrap};
  padding-top: 1rem;
  padding-bottom: 1rem;

  ${breakpointMappings.lg} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const StyledEventsList = styled(Flex)`
  ${breakpointMappings.lg} {
    width: 90%;
    margin: auto;
  }
`;

const StyledEvent = styled(Flex)`
  margin-top: 1rem;
  flex-direction: column;
  box-shadow: ${props => props.theme.shadows.elevationShadow};

  ${breakpointMappings.lg} {
    flex-direction: row;
  }
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
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          p="1rem"
          style={{ flexGrow: 1 }}
        >
          <Box>
            <h2 className="no-margin">{event.title}</h2>
            <p className="no-margin small bold">
              {moment(event.date).format("dddd, MMMM Do YYYY")} | {event.time}
            </p>
            <p className="no-margin small">{event.location}</p>
            <p className="no-margin small">{event.address}</p>
            <p className="medium">{event.details}</p>
          </Box>
          <Flex alignItems="center">
            {event.cost ? (
              <h2 className="no-margin">{event.cost}</h2>
            ) : (
              <h2 className="no-margin">Free!</h2>
            )}
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
