import * as React from "react";
import Media from "react-media";

import { breakpoints, breakpointsEnd } from "../../styles";

//
// --- BreakPoint Mappings Object ---
export const breakpointMappings = {
  xs: { screen: true, maxWidth: breakpointsEnd[0] },
  sm: { screen: true, minWidth: breakpoints[0], maxWidth: breakpointsEnd[1] },
  md: { screen: true, minWidth: breakpoints[1], maxWidth: breakpointsEnd[2] },
  lg: { screen: true, minWidth: breakpoints[2] },
  xlg: { screen: true, minWidth: breakpoints[3] },
  print: { print: true }
};

//
// --- HideBreakpoint Component ---
/**
 * Hides content based off breakpoints using ReactMedia
 */

const HideBreakPoint = props => {
  const { xs, sm, md, lg, xlg, print } = props;
  const queries = [
    ...(xs ? [breakpointMappings.xs] : []),
    ...(sm ? [breakpointMappings.sm] : []),
    ...(md ? [breakpointMappings.md] : []),
    ...(lg ? [breakpointMappings.lg] : []),
    ...(xlg ? [breakpointMappings.xlg] : []),
    ...(print ? [breakpointMappings.print] : [])
  ];

  return (
    <Media query={queries}>
      {matches => {
        return !matches ? <span>{props.children}</span> : null;
      }}
    </Media>
  );
};

export default HideBreakPoint;
