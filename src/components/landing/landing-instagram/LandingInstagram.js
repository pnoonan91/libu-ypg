import * as React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

import { breakpointMappings } from "../../../styles/sizes";

//
// --- Styled Components ---
const StyledLandingInstagramContainer = styled(Flex)`
  margin: auto;
  max-width: ${props => props.theme.elementSizes.siteWrap};
`;

const StyledImage = styled.div`
  min-width: 280px;
  min-height: 280px;
  background-image: url(${props => props.src});
  background-position: ${props => (props.position ? props.position : "center")};
  margin-bottom: 1rem;
  background-size: 150%;

  ${breakpointMappings.lg} {
    margin-bottom: 2rem;
  }
`;

//
// --- Landing Instagram Componenet ---
const LandingInstagram = props => {
  const images = [
    {
      source:
        "https://scontent-ort2-2.cdninstagram.com/vp/6c82e83067d0a54b4fa2e8b38f68e796/5C78F5C3/t51.2885-15/e35/43779628_2270747593157710_1017391955149353842_n.jpg",
      position: "right center"
    },
    {
      source:
        "https://scontent-ort2-2.cdninstagram.com/vp/c95c138107a3892619da7894eb93e2b9/5C72095B/t51.2885-15/e35/36161445_407234999790934_619225617115643904_n.jpg",
      position: "left center"
    },
    {
      source:
        "https://scontent-ort2-2.cdninstagram.com/vp/e2d687e4f27c47f19565fb32ca20410b/5C669677/t51.2885-15/e35/21149097_137592640182175_6748550969673383936_n.jpg"
    },
    {
      source:
        "https://scontent-ort2-2.cdninstagram.com/vp/9fb7e6e5ec6b6081b07fed14627328ec/5C85097B/t51.2885-15/e35/35948789_207784676534587_4039841664477429760_n.jpg",
      position: "top left"
    },
    {
      source:
        "https://scontent-ort2-2.cdninstagram.com/vp/9ef79c7c3ec860af0ae6af64732df423/5C8AEADA/t51.2885-15/e35/28435810_406597626459949_4598869857490960384_n.jpg"
    },
    {
      source:
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/44943415_10155592518711644_2190230302150885376_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-2.xx&oh=7af2e1ff4cf97c4da8b4d5f30db61af3&oe=5C472533",
      position: "right center"
    },
    {
      source:
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/36682122_2192109450834347_4349662081016922112_o.jpg?_nc_cat=108&_nc_ht=scontent-ort2-2.xx&oh=30e11d971201c1026148695d18d5c1af&oe=5C49F1C8"
    },
    {
      source:
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/36718769_2192109227501036_7334231513522765824_o.jpg?_nc_cat=104&_nc_ht=scontent-ort2-2.xx&oh=f175debe35a130d5edf517aa95f10d50&oe=5C4705F8"
    }
  ];

  const mappedImages = images =>
    images.map(image => (
      <StyledImage src={image.source} position={image.position} />
    ));
  return (
    <StyledLandingInstagramContainer flexDirection="column">
      <Flex flexDirection="column" style={{ textAlign: "center" }}>
        <h2
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "1rem"
          }}
        >
          Share Your Favorites. #LetItBeUs
        </h2>
        <Flex flexWrap="wrap" justifyContent="space-around">
          {mappedImages(images)}
        </Flex>
        <p
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
            fontSize: "1.5rem"
          }}
        >
          <i class="fab fa-instagram" /> Follow us on Instagram:{" "}
          <a
            className="secondary"
            href="https://www.instagram.com/letitbeusypg/"
            style={{ margin: "0", padding: "0" }}
          >
            @letitbeusypg
          </a>
        </p>
      </Flex>
    </StyledLandingInstagramContainer>
  );
};

export default LandingInstagram;
