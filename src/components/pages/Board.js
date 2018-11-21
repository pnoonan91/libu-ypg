import React from "react";
import styled from "styled-components";

import BannerImage from "../image/BannerImage";

const board = "Meet Our Board";
//
// --- Styled Components ---

//
// --- Board Page ---
const Board = props => {
  return (
    <div>
      <BannerImage image="/images/board.jpeg" tagline={board} />
    </div>
  );
};

export default Board;
