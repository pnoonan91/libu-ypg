import { createGlobalStyle } from "styled-components";
import theme from "./theme";

import {
  breakpoints,
  breakpointsEnd,
  breakpointMappings,
  fontSizes,
  space,
  elementSizes
} from "./sizes";

export {
  breakpoints,
  breakpointsEnd,
  breakpointMappings,
  fontSizes,
  space,
  elementSizes
};

//
// --- Global Style ---
export const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${theme.fonts.body};
        color: ${theme.colors.primaryGray};
        box-sizing: border-box;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${theme.fonts.heading};
        font-weight: 500;
        color: ${theme.colors.primaryPink};
        letter-spacing: 0.2px;
    }
    h1.white,
    h2.white,
    h3.white,
    h4.white,
    h5.white,
    h6.white {
        color: white;
    }
    h1.small-margin,
    h2.small-margin,
    h3.small-margin,
    h4.small-margin,
    h5.small-margin,
    h6.small-margin {
        margin: 0.5rem 0;
    }
    h1.no-margin,
    h2.no-margin,
    h3.no-margin,
    h4.no-margin,
    h5.no-margin,
    h6.no-margin {
        margin: 0;
    }
    p.no-margin {
        margin: 0;
    }
    p.small {
        font-size: 12px;
    }
    p.medium {
        font-size: 14px;
    }
    p.bold {
        font-weight: bold;
    }
    a {
        text-decoration: none;
    }
    a.outline {
        border: 1px solid ${theme.colors.primaryPink};
        padding: .5rem 1rem;
        color: ${theme.colors.primaryPink};
        font-weight: bold;
        transition: background-color .4s, color .4s;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        
        :hover {
            color: white;
            background-color: ${theme.colors.primaryPink};
            cursor: pointer;
        }
    }
    a.primary {
        border: 1px solid ${theme.colors.primaryPink};
        padding: .5rem 1rem;
        background-color: ${theme.colors.primaryPink};
        font-weight: bold;
        transition: background-color .4s, color .4s;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        color: white;
        
        :hover {
            background-color: ${theme.colors.darkPink};
            border-color: ${theme.colors.darkPink};
            cursor: pointer;
        }
    }
    a.secondary {
        font-weight: bold;
        padding: .5rem 1rem;
        color: ${theme.colors.primaryGray};
        transition: color .4s;
        letter-spacing: 0.3px;
        text-transform: uppercase;

        :hover {
            cursor: pointer;
            color: ${theme.colors.primaryPink};
        }
    }
    a.white {
        color: white;
        padding: .5rem;

        :hover {
            cursor: pointer;
            color: ${theme.colors.primaryGray};
        }
    }
`;
