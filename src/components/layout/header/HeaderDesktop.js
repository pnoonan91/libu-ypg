import * as React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

//
// --- Styled Components ---
const StyledDesktopContainer = styled(Flex)`
  margin: auto;
  max-width: ${props => props.theme.elementSizes.siteWrap};
`;

const StyledDesktopLogo = styled.img`
  height: 75px;
`;

const StyledDesktopLinkContainer = styled(Flex)`
  margin-left: 1rem;
`;

const StyledLink = styled(Flex)`
  height: 100%;
  margin-left: 1rem;
  border-bottom: 3px solid transparent;
  transition: all 0.4s ease;
  text-transform: uppercase;

  :hover {
    border-color: ${props => props.theme.colors.primaryPink};
    color: ${props => props.theme.colors.primaryPink};
    cursor: pointer;
  }
`;

const StyledButton = styled(Flex)`
  margin-left: 1rem;
`;

//
// --- Header Desktop Component ---

const HeaderDesktop = props => {
  return (
    <header>
      <StyledDesktopContainer
        px={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex>
          <Flex alignItems="center">
            <StyledDesktopLogo src={props.logo} />
            <h2>{props.logoText}</h2>
          </Flex>
          <StyledDesktopLinkContainer alignItems="center">
            {props.links.map(link => (
              <StyledLink alignItems="center" key={`${link.text}-nav-item`}>
                <a>{link.text}</a>
              </StyledLink>
            ))}
          </StyledDesktopLinkContainer>
        </Flex>
        <Flex>
          {props.buttons.map(button => (
            <StyledButton key={`${button.text}-button-item`}>
              <a className={button.class}>{button.text}</a>
            </StyledButton>
          ))}
        </Flex>
      </StyledDesktopContainer>
    </header>
  );
};

export default HeaderDesktop;
