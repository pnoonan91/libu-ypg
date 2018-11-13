import styled from "styled-components";

//
// --- Styled Caption ---
export const StyledCaption = styled.h2`
  font-style: italic;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: ${props => props.theme.elementSizes.siteWrap};
  margin: auto;
`;
