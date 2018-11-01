import * as React from "react";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";
import * as moment from "moment";

import { breakpointMappings } from "../../../styles";
import { volunteer } from "../../../data/volunteer";
import HideBreakPoint from "../../layout/HideBreakPoint";

//
// --- Styled Components ---
const StyledLandingVolunteerContainer = styled(Flex)`
  margin: auto;
  max-width: ${props => props.theme.elementSizes.siteWrap};
  padding-top: 1rem;
  padding-bottom: 1rem;

  ${breakpointMappings.lg} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const StyledVolunteerList = styled(Flex)`
  ${breakpointMappings.lg} {
    width: 90%;
    margin: auto;
  }
`;

const StyledVolunteer = styled(Flex)`
  ${breakpointMappings.lg} {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d2d2d2;
  }
`;

const StyledHeader = styled(Box)`
  background-color: ${props => props.theme.colors.primaryPink};
  color: white;
  font-weight: bold;
`;

const StyledVolunteerMobile = styled(Flex)`
  border-bottom: 1px solid #d2d2d2;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

//
// --- Landing Volunteer Component ---
const LandingVolunter = props => {
  const futureVolunteer = volunteer.filter(v => moment(v.date) > moment());

  const mapVolunteerEventsDesktop = events =>
    events.map(event => (
      <StyledVolunteer key={`${event.title}-volunteer-event-desktop`}>
        <Box width="15%" px={2}>
          <p className="bold no-margin">
            {moment(event.date).format("MMMM Do YYYY")}
          </p>
          <p className="no-margin small">{event.time}</p>
        </Box>
        <Box width="18%" px={2}>
          <p className="no-margin">{event.title}</p>
        </Box>
        <Box width="30%" px={2}>
          <p className="no-margin">{event.details}</p>
        </Box>
        <Box width="25%" px={2}>
          <p className="no-margin">{event.location}</p>
          <p className="no-margin small">{event.address}</p>
        </Box>
        <Flex width="12%" px={2}>
          <a
            className="outline"
            href={event.signUpLink}
            style={{ margin: "auto" }}
          >
            Sign Up
          </a>
        </Flex>
      </StyledVolunteer>
    ));

  const mapVolunteerEventsMobile = events =>
    events.map(event => (
      <StyledVolunteerMobile
        key={`${event.title}-volunteer-event-mobile`}
        flexDirection="column"
      >
        <h2>{event.title}</h2>
        <p className="bold no-margin">
          {moment(event.date).format("MMMM Do YYYY")}
        </p>
        <p className="small no-margin">{event.location}</p>
        <p className="small no-margin">{event.address}</p>
        <p className="small no-margin">{event.time}</p>
        <p className="small-margin">{event.details}</p>
        <a
          className="primary"
          href={event.signUpLink}
          style={{ textAlign: "center", marginTop: "1rem" }}
        >
          Sign Up
        </a>
      </StyledVolunteerMobile>
    ));
  return (
    <StyledLandingVolunteerContainer flexDirection="column" px={2}>
      <h1 className="no-margin">Volunteer</h1>
      <p className="no-margin">
        The LIBU Young Professional Group aims to constantly give back to our
        comminuity in meaningful and sustainable ways throughout the year. If
        you are interested in volunteering, feel free to sign up in the attached
        Google Sheet links!
      </p>
      <StyledVolunteerList flexDirection="column">
        <HideBreakPoint xs sm md>
          <Flex justifyContent="center" mt="2rem">
            <StyledHeader width="15%" px={2}>
              <h2 className="white">Date</h2>
            </StyledHeader>
            <StyledHeader width="18%" px={2}>
              <h2 className="white">Event</h2>
            </StyledHeader>
            <StyledHeader width="30%" px={2}>
              <h2 className="white">Description</h2>
            </StyledHeader>
            <StyledHeader width="25%" px={2}>
              <h2 className="white">Location</h2>
            </StyledHeader>
            <StyledHeader width="12%" px={2} style={{ textAlign: "center" }}>
              <h2 className="white">Join Us!</h2>
            </StyledHeader>
          </Flex>
          {mapVolunteerEventsDesktop(futureVolunteer)}
        </HideBreakPoint>
        <HideBreakPoint lg>
          {mapVolunteerEventsMobile(futureVolunteer)}
        </HideBreakPoint>
      </StyledVolunteerList>
    </StyledLandingVolunteerContainer>
  );
};

export default LandingVolunter;
