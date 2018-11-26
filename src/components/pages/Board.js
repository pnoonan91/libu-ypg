import React from "react";
import styled from "styled-components";

import BannerImage from "../image/BannerImage";
import { StyledCaption } from "../layout/Caption";
import Dropdown from "../dropdown/Dropdown";

const board = "Meet Our Board";

const boardCaption =
  "We consist of young adult leaders in various professional fields across Chicagoland who advocate for children living in foster care.";
//
// --- Styled Components ---
const StyledBoardFooter = styled.div`
  background-color: ${props => props.theme.colors.lightPink};
  text-align: center;
  padding: 1rem;
`;

//
// --- Board Page ---
const Board = props => {
  return (
    <div>
      <BannerImage image="/images/board.jpeg" tagline={board} />
      <StyledCaption>{boardCaption}</StyledCaption>
      <Dropdown />
      <StyledBoardFooter>
        <h2 className="pink">Interested in joining our board? Check out our membership page or send us an email at <a className="pink" href="mailto:letitbeusypg@gmail.com">letitbeusypg@gmail.com</a></h2>
      </StyledBoardFooter>
    </div>
  );
};

export default Board;
