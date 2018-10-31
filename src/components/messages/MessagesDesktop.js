import * as React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

import { breakpointMappings } from "../../styles/sizes";

//
// --- Styled Components ---
const StyledDesktopMessagesContainer = styled(Flex)`
  color: white;
`;

const StyledDesktopMessage = styled(Flex)`
  margin: auto;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  ${breakpointMappings.lg} {
    flex-direction: row;
  }
`;

//
// --- Messages Desktop Component ---
const Messages = props => {
  if (!props.showMessage) {
    return null;
  }
  return (
    <StyledDesktopMessagesContainer>
      <StyledDesktopMessage alignItems="center">
        <h3 style={{ margin: "0" }} className="white">
          {props.message.header} -{" "}
        </h3>
        <p style={{ margin: "0" }}>{props.message.content}</p>
        <a style={{ margin: "0" }} className="white secondary">
          {props.message.linkText}
        </a>
      </StyledDesktopMessage>
    </StyledDesktopMessagesContainer>
  );
};

export default Messages;
