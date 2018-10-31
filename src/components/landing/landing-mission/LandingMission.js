import * as React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

//
// --- Styled Components ---
const StyledLandingMissionContainer = styled(Flex)`
  background-color: ${props => props.theme.colors.primaryPink};
`;

const StyledMission = styled(Flex)`
  text-align: center;
  margin: auto;
  max-width: ${props => props.theme.elementSizes.siteWrap};
  font-style: italic;
`;

//
// --- Landing Mission Component ---
const LandingMission = props => {
  const missionStatement =
    "The Let It Be Us Young Professionals Group (YPG) aims to educate young adults about adoption from foster care. The group simultaneously hosts events and raises money to support the ongoing efforts and programs put on by the greater Let It Be Us organization. We consist of young adult leaders in various professional fields across Chicagoland who advocate for the children in foster care.";

  return (
    <StyledLandingMissionContainer>
      <StyledMission>
        <h3 className="white">{missionStatement}</h3>
      </StyledMission>
    </StyledLandingMissionContainer>
  );
};

export default LandingMission;
