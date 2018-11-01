import * as React from "react";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";

import HideBreakPoint from "../../layout/HideBreakPoint";
import { breakpointMappings } from "../../../styles/sizes";

//
// --- Styled Components ---
const StyledLandingAboutContainer = styled(Flex)`
  margin: auto;
  max-width: ${props => props.theme.elementSizes.siteWrap};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledLandingAboutSection = styled(Box)`
  text-align: center;
  width: 100%;
  padding: 1rem;

  ${breakpointMappings.lg} {
    width: 20%;
    padding: 0;
  }
`;

const StyledLandingIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: auto;
`;

const StyledLandingAboutHeader = styled.h1`
  margin: auto;
  margin-bottom: 1rem;

  ${breakpointMappings.lg} {
    margin-bottom: 2rem;
  }
`;

//
// -- Landing About Component ---
const LandingAbout = props => {
  const howWeHelp = "How We Help";
  const getInvolved = "Get Involved!";
  const aboutSections = [
    {
      title: "Fundraisers",
      description:
        "We organize various fundraising events throughout the year - 100% of proceeds benefit children living in Illinois Foster Care!",
      imagePath: "/images/donation.png"
    },
    {
      title: "Group Home Sponsor",
      description:
        "We have partnered with a group home in Chicago and we work with resident foster children to provide lasting and sustainable resources that promote life skills and independence.",
      imagePath: "/images/home.png"
    },
    {
      title: "Project Dignity",
      description:
        "We provide children entering residential foster with a large duffel bag or backpack containing comfort items and toiletries.",
      imagePath: "/images/food.png"
    },
    {
      title: "Forever Families",
      description:
        "We want to help the children living in Illinois Foster Care to find their forever families. We aim to do this by educating young adults about the option of adoption from foster care when it comes time to start a family.",
      imagePath: "/images/adoption.png"
    }
  ];

  const mappedAboutIcons = (
    <Flex justifyContent="space-around">
      {aboutSections.map(about => (
        <StyledLandingAboutSection key={`${about.imagePath}-icons`}>
          <StyledLandingIcon src={about.imagePath} />
        </StyledLandingAboutSection>
      ))}
    </Flex>
  );

  const mappedAboutTitles = (
    <Flex justifyContent="space-around">
      {aboutSections.map(about => (
        <StyledLandingAboutSection key={`${about.title}-titles`}>
          <h2 className="small-margin">{about.title}</h2>
        </StyledLandingAboutSection>
      ))}
    </Flex>
  );

  const mappedAboutDescriptions = (
    <Flex justifyContent="space-around">
      {aboutSections.map(about => (
        <StyledLandingAboutSection key={`${about.title}-description`}>
          <p className="no-margin">{about.description}</p>
        </StyledLandingAboutSection>
      ))}
    </Flex>
  );

  const mobileMappedAboutSections = aboutSections.map(about => (
    <StyledLandingAboutSection key={`${about.title}-mobile-sections`}>
      <StyledLandingIcon src={about.imagePath} />
      <h2 className="small-margin">{about.title}</h2>
      <p className="no-margin">{about.description}</p>
    </StyledLandingAboutSection>
  ));
  return (
    <StyledLandingAboutContainer>
      <Flex flexDirection="column">
        <StyledLandingAboutHeader>{howWeHelp}</StyledLandingAboutHeader>
        <Flex justifyContent="space-between" flexDirection="column">
          <HideBreakPoint xs sm md>
            {mappedAboutIcons}
            {mappedAboutTitles}
            {mappedAboutDescriptions}
          </HideBreakPoint>
          <HideBreakPoint lg xlg pring>
            {mobileMappedAboutSections}
          </HideBreakPoint>
        </Flex>
        <Box m={"auto"} pt="2rem">
          <a className="primary">{getInvolved}</a>
        </Box>
      </Flex>
    </StyledLandingAboutContainer>
  );
};

export default LandingAbout;
