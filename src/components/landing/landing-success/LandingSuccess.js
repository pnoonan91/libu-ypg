import * as React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

import { breakpointMappings } from "../../../styles/sizes";

const successImageSource = "/images/family.jpeg";
const successImageTagline = "Success Stories";
const successImageCaption =
  "There's nothing more genuine than giving a child a sense of safety and belonging.";

//
// --- Styled Components ---
const StyledLandingImageContainer = styled(Flex)`
  background-image: url(${successImageSource});
  background-size: 200%;
  background-position: bottom;
  height: 300px;

  ${breakpointMappings.lg} {
    background-size: 100%;
    background-position: bottom;
    height: 500px;
  }
`;

const StyledLandingSuccessTextContainer = styled(Flex)`
  margin-top: auto;
  margin-bottom: 1rem;

  ${breakpointMappings.lg} {
    align-items: flex-end;
    margin-bottom: 2rem;
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
    font-size: 1.2rem;
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

  ${breakpointMappings.md_down} {
    font-size: 1rem;
  }
`;

//
// --- Landing Image Component ---
const LandingImage = props => {
  return (
    <StyledLandingImageContainer flexDirection="column">
      <StyledLandingSuccessTextContainer flexDirection="column">
        <StyledSuccessImageTagline>
          {successImageTagline}
        </StyledSuccessImageTagline>
        <StyledSuccessImageCaption>
          {successImageCaption}
        </StyledSuccessImageCaption>
        <StyledSuccessButton className="primary">
          See Our Work In Action
        </StyledSuccessButton>
      </StyledLandingSuccessTextContainer>
    </StyledLandingImageContainer>
  );
};

export default LandingImage;
