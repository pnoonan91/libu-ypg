import * as React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

import { breakpointMappings } from "../../styles/sizes";

//
// --- Styled Components ---
const StyledLandingImageContainer = styled(Flex)`
  background-image: url(${props => props.imagePath});
  background-size: 150%;
  background-position: center;
  height: 275px;
  align-items: flex-end;

  ${breakpointMappings.lg} {
    background-size: 100%;
    height: 400px;
  }
`;

const StyledLandingImageTagline = styled.h2`
  margin-left: auto;
  margin-right: auto;
  text-shadow: rgba(0, 0, 0, 0.25) 1px 1px 1px;
  text-align: center;

  ${breakpointMappings.md_down} {
    padding: 2rem;
    font-size: 1rem;
  }

  ${breakpointMappings.lg} {
    margin-bottom: 5rem;
  }
`;

//
// --- Landing Image Component ---
const LandingImage = props => {
  return (
    <StyledLandingImageContainer imagePath={props.image}>
      <StyledLandingImageTagline className="white">
        {props.tagline}
      </StyledLandingImageTagline>
    </StyledLandingImageContainer>
  );
};

export default LandingImage;
