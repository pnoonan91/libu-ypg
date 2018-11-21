import * as React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";
import { Link } from "react-router-dom";

import HideBreakPoint from "../../layout/HideBreakPoint";
import { breakpointMappings } from "../../../styles";

//
// --- Styled Components ---
const StyledFooter = styled(Flex)`
  width: 100%;
  background-color: ${props => props.theme.colors.primaryPink};
`;

const StyledLinkContainer = styled(Flex)`
  flex-direction: column;

  ${breakpointMappings.lg} {
    flex-direction: row;
    margin: auto;
    max-width: ${props => props.theme.elementSizes.siteWrap};
  }
`;

//
// --- Footer Component ---
const Footer = props => {
  return (
    <StyledFooter>
      <header style={{ width: "100%" }}>
        <StyledLinkContainer
          px={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Link className="secondary white medium" to="/">
              Home
            </Link>
            <Link className="secondary white medium" to="/about">
              About Us
            </Link>
            <Link to="/events" className="secondary white medium">
              Events
            </Link>
            <a className="secondary white medium">Board</a>
            <a className="secondary white medium">News</a>
            <HideBreakPoint xs sm md>
              <a className="secondary white medium">Volunteer</a>
              <a className="secondary white medium">Join Us</a>
            </HideBreakPoint>
          </Flex>
          <Flex>
            <p className="white medium">&copy;LIBU Young Professionals, 2018</p>
          </Flex>
        </StyledLinkContainer>
      </header>
    </StyledFooter>
  );
};

export default Footer;
