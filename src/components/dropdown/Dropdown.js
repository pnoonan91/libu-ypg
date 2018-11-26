import React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

import { boardMembers } from "../../data/board";
import { breakpointMappings } from "../../styles/sizes";

//
// --- Styled Components ---
const StyledDropdownContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.mediumGray};
  margin: 1rem;
  padding: 0.5rem;
`;

const StyledBoardImage = styled.div`
background-image: url(${props => props.imgSrc});
background-position: ${props => props.center && 'center'}
height: 150px;
width: 150px;
margin-left: auto;
margin-right: auto;
margin-bottom: 1rem;
background-size: 200px;
border-radius: 100px;


    ${breakpointMappings.lg} {
        min-width: 150px;
        height: 150px;
        margin-right: 2rem;
        margin-left: 0;
        margin-bottom: 0;
    }
`;

const StyledMobileFlex = styled(Flex)`
    flex-direction: column;

    ${breakpointMappings.lg} {
        flex-direction: row;
    }
`;

const StyledMobilePositions = styled.div`
    ${breakpointMappings.md_down} {
        text-align: center;
    }
`;

//
// --- Dropdown Component ---
const Dropdown = props => {
  return boardMembers.map(member => (
    <StyledDropdownContainer>
      <StyledMobileFlex>
        <StyledBoardImage imgSrc={member.image} center={member.center}/>
        <Flex flexDirection="column">
            <StyledMobilePositions>

          <h2 className="no-margin">{member.name}</h2>
          <p className="pink no-margin">{member.position}</p>
            </StyledMobilePositions>
          {member.bio.split("<p>").map(paragraph => (
            <p>{paragraph}</p>
          ))}
        </Flex>
      </StyledMobileFlex>
    </StyledDropdownContainer>
  ));
};

export default Dropdown;
