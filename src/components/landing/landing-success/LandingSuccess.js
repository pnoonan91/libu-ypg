import * as React from "react";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";

import { breakpointMappings } from "../../../styles/sizes";

const successImageSource = "/images/team-noonan.jpg";
const successImageTagline = "Success Stories";
const successImageCaption =
  "There's nothing more genuine than giving a child a sense of safety and belonging.";

//
// --- Styled Components ---
const StyledLandingImageContainer = styled(Flex)`
  background-image: url(${successImageSource});
  background-size: 150%;
  background-position: center;
  height: 275px;

  ${breakpointMappings.lg} {
    background-size: 100%;
    height: 300px;
  }
`;

const StyledSuccessImageTagline = styled.h1`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  text-shadow: rgba(0, 0, 0, 0.25) 1px 1px 1px;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 1px 1px 1px;

  ${breakpointMappings.md_down} {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const StyledSuccessImageCaption = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 1px 1px 1px;
  color: ${props => props.theme.colors.primaryPink};
`;

const StyledSuccessButton = styled.a`
  margin: auto;
  text-align: center;
`;

//
// --- Landing Image Component ---
const LandingImage = props => {
  return (
    <StyledLandingImageContainer flexDirection="column">
      <Box style={{ textAlign: "center", marginTop: "9rem" }}>
        <StyledSuccessImageTagline>
          {successImageTagline}
        </StyledSuccessImageTagline>
        <StyledSuccessImageCaption>
          {successImageCaption}
        </StyledSuccessImageCaption>
        <StyledSuccessButton className="primary">
          See Our Work In Action
        </StyledSuccessButton>
      </Box>
    </StyledLandingImageContainer>
  );
};

export default LandingImage;
