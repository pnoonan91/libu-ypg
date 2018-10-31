import * as React from "react";
import styled from "styled-components";

import MessagesDesktop from "./MessagesDesktop";

//
// --- Styled Components ---
const StyledMessageContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryPink};
`;

//
// --- Messages Component ---

const Messages = props => {
  const showMessage = true;
  const message = {
    header: "Plea for Members",
    content: "We're actively looking for members!",
    linkText: "Join Us",
    linkPath: "/join"
  };

  return (
    <StyledMessageContainer>
      <MessagesDesktop showMessage={showMessage} message={message} />
    </StyledMessageContainer>
  );
};

export default Messages;
