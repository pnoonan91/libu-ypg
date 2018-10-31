import * as React from "react";
import styled from "styled-components";

import HideBreakPoint from "../HideBreakPoint";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

//
// --- Styled Components ---
const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  z-index: 1;
  width: 100%;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  background-color: white;
`;

//
// --- Header Component ---

const Header = props => {
  const logoSource = "/images/cropped-heart.png";
  const logoText = "LIBU Young Professionals";

  const links = [
    {
      text: "About",
      path: "/about"
    },
    {
      text: "Events",
      path: "/events"
    },
    {
      text: "Board",
      path: "/board"
    },
    {
      text: "News",
      path: "/news"
    }
  ];

  const buttons = [
    {
      text: "Volunteer",
      path: "/volunteer",
      class: "outline"
    },
    {
      text: "Join Us",
      path: "/join",
      class: "secondary"
    }
  ];

  return (
    <StyledHeader>
      <HideBreakPoint xs sm md>
        <HeaderDesktop
          logo={logoSource}
          logoText={logoText}
          links={links}
          buttons={buttons}
        />
      </HideBreakPoint>
      <HideBreakPoint lg xlg print>
        <HeaderMobile
          logo={logoSource}
          logoText={logoText}
          links={[...links, ...buttons]}
        />
      </HideBreakPoint>
    </StyledHeader>
  );
};

export default Header;
