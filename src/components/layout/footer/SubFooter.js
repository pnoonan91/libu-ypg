import * as React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

import { breakpointMappings } from "../../../styles";

//
// --- Styled Components ---
const StyledSubFooterContainer = styled(Flex)`
  width: 100%;
  background-color: ${props => props.theme.colors.lightGray};
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  border-top: 1px solid ${props => props.theme.colors.mediumGray};
  padding: 1rem 0;
`;

const StyledHeader = styled.header`
  width: 100%;
`;

const StyledSubFooter = styled(Flex)`
  flex-direction: column;
  text-align: center;

  ${breakpointMappings.lg} {
    flex-direction: row;
    margin: auto;
    max-width: ${props => props.theme.elementSizes.siteWrap};
  }
`;

const StyledSubFooterSideBox = styled(Flex)`
  flex-direction: column;
  width: 60%;
  margin: auto;

  ${breakpointMappings.lg} {
    width: 20%;
  }
`;

const StyledSubFooterCenterBox = styled(Flex)`
  flex-direction: column;
  border-top: 1px solid ${props => props.theme.colors.mediumGray};
  border-bottom: 1px solid ${props => props.theme.colors.mediumGray};

  ${breakpointMappings.lg} {
    width: 50%;
    border-left: 1px solid ${props => props.theme.colors.mediumGray};
    border-right: 1px solid ${props => props.theme.colors.mediumGray};
    border-top: none;
    border-bottom: none;
  }
`;

const StyledFooterIconLink = styled.a`
  margin: auto;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.primaryPink};
  transition: color 0.4s;
  letter-spacing: 0.3px;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.darkPink};
  }
`;

const StyledDonateContainer = styled.div`
  padding: 2rem;
  width: 100%;
`;

//
// --- SubFooter Component ---
const SubFooter = props => {
  return (
    <StyledSubFooterContainer>
      <StyledHeader>
        <StyledSubFooter px={2} justifyContent="space-between">
          <StyledSubFooterSideBox>
            <p className="header">Social</p>
            <Flex style={{ padding: "0.5rem 1rem" }}>
              <Flex
                justifyContent="space-around"
                style={{ height: "2rem", width: "100%" }}
              >
                <StyledFooterIconLink href="https://www.facebook.com/Let-It-Be-Us-Young-Professionals-Group-979779648888839">
                  <i className="fab fa-facebook-square" />
                </StyledFooterIconLink>
                <StyledFooterIconLink href="https://www.instagram.com/letitbeusypg/">
                  <i className="fab fa-instagram" />
                </StyledFooterIconLink>
                <StyledFooterIconLink href="https://letitbeus.org/">
                  <i className="fas fa-heart" />
                </StyledFooterIconLink>
              </Flex>
            </Flex>
          </StyledSubFooterSideBox>
          <StyledSubFooterCenterBox>
            <p className="header">Contact Us</p>
            <a
              href="mailto:letitbeusypg@gmail.com"
              className="secondary"
              style={{ height: "2rem", fontSize: "1.25rem" }}
            >
              letitbeusypg@gmail.com
            </a>
          </StyledSubFooterCenterBox>
          <StyledSubFooterSideBox alignItems="center">
            <StyledDonateContainer>
              <a
                href="https://letitbeus.org/donate-to-let-it-be-us/"
                className="primary"
              >
                Donate
              </a>
            </StyledDonateContainer>
          </StyledSubFooterSideBox>
        </StyledSubFooter>
      </StyledHeader>
    </StyledSubFooterContainer>
  );
};

export default SubFooter;
