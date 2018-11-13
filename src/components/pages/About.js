import React from "react";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";

import BannerImage from "../image/BannerImage";
import { breakpointMappings } from "../../styles/sizes";
import { StyledCaption } from "../layout/Caption";

const ourGoal =
  "Our goal is simple: We want to help the children living in Illinois Foster Care to find their forever families.";

const aboutUs = "About Us";

//
// --- Styled Components ---
const StyledAboutPageContainer = styled(Flex)`
  margin: auto;
`;

const StyledInformationSection = styled(Flex)`
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  flex-direction: ${props =>
    props.mobileReverse ? "column-reverse" : "column"};
  align-items: center;
  background-color: ${props =>
    props.pinkBackground ? props.theme.colors.lightPink : "white"};

  ${breakpointMappings.lg} {
    padding-top: 2rem;
    padding-bottom: 2rem;
    flex-direction: ${props => (props.column ? "column" : "row")};
    margin: ${props => (props.bind ? "auto" : "")};
    max-width: ${props =>
      props.bind ? props.theme.elementSizes.siteWrap : ""};
  }
`;

const StyledAboutSectionContent = styled.p``;

const StyledByTheNumbersSection = styled(Flex)`
  box-shadow: ${props => props.theme.shadows.elevationShadow};
  flex-direction: column;
  text-align: center;
  margin-bottom: 1rem;

  ${breakpointMappings.lg} {
    margin-left: 2rem;
    margin-right: 0.5rem;
    min-width: 50%;
    padding: 0.5rem;
  }
`;

const StyledStatisticContainer = styled(Box)`
  padding-bottom: 0.5rem;
`;

const StyledIconContainer = styled(Flex)`
  margin-top: 1rem;
  flex-direction: column;
  text-align: center;

  ${breakpointMappings.lg} {
    min-width: 30%;
    margin-right: ${props => (props.right ? "2rem" : "0")};
    margin-left: ${props => (props.left ? "2rem" : "0")};
    margin-top: 0;
  }
`;

const StyledIcon = styled.img`
  height: 150px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledIconSectionLink = styled.a`
  margin: auto;
  margin-top: 1rem;
`;

const StyledBindingContainer = styled(Flex)`
  flex-direction: column;
  ${breakpointMappings.lg} {
    flex-direction: row;
    max-width: ${props => props.theme.elementSizes.siteWrap};
    margin: auto;
  }
`;

//
// --- About Page---

const About = props => (
  <div>
    <BannerImage image="/images/about-us.jpeg" tagline={aboutUs} />
    <StyledAboutPageContainer flexDirection="column">
      <StyledCaption>{ourGoal}</StyledCaption>
      <StyledInformationSection bind>
        <Flex flexDirection="column" alignItems="center">
          <StyledAboutSectionContent>
            The Let It Be Us Young Professionals Group was started by a
            motivated group of individuals who have all been effected by foster
            care in one way or another.
          </StyledAboutSectionContent>
          <StyledAboutSectionContent>
            In the United States alone, there are an estimated 400,000 children
            living in foster care. Roughly 96,000 of these children are waiting
            to be adopted. In the state of Illinois, there are currently about
            18,000 children living in foster care. 15% of children in foster
            care live in institutionalized or group homes. By the age of 19, 48%
            of girls who grew up in foster care are pregnant. 40% of children
            who “age out” of the foster care system are homeless within 18
            months. And only about 3% of children in foster care receive a
            college degree.
          </StyledAboutSectionContent>
          <StyledAboutSectionContent>
            Our goal is simple: we want to help the children living in Illinois
            Foster Care to find their forever families. We aim to do this by
            educating young adults about the option of adoption from foster care
            when it comes time to start a family. We also hosts events and raise
            money to support the ongoing efforts and programs put on by the
            greater Let It Be Us organization.
          </StyledAboutSectionContent>
        </Flex>
        <StyledByTheNumbersSection>
          <h1>By The Numbers</h1>
          <Flex flexDirection="column" style={{ textAlign: "center" }}>
            <Flex>
              <StyledStatisticContainer>
                <h1>8.5</h1>
                <p className="no-margin medium upper-case">
                  Average age of a child in foster care
                </p>
              </StyledStatisticContainer>
              <StyledStatisticContainer>
                <h1>15%</h1>
                <p className="no-margin medium upper-case">
                  Live in institutions or group homes
                </p>
              </StyledStatisticContainer>
              <StyledStatisticContainer>
                <h1>26,000</h1>
                <p className="no-margin medium upper-case">
                  Kids "age out" of the system each year
                </p>
              </StyledStatisticContainer>
            </Flex>
            <Flex>
              <StyledStatisticContainer>
                <h1>40%</h1>
                <p className="no-margin medium upper-case">
                  Of children who "age out" will become homeless within 18
                  months
                </p>
              </StyledStatisticContainer>
              <StyledStatisticContainer>
                <h1>3%</h1>
                <p className="no-margin medium upper-case">
                  Of youths leaving the foster care system attain a college
                  degree
                </p>
              </StyledStatisticContainer>
            </Flex>
            <Flex>
              <StyledStatisticContainer>
                <h1>50%</h1>
                <p className="no-margin medium upper-case">
                  of youths who "age out" graduate high school
                </p>
              </StyledStatisticContainer>
              <StyledStatisticContainer>
                <h1>48%</h1>
                <p className="no-margin medium upper-case">
                  of women who grew up in foster care are pregnant by age 19
                </p>
              </StyledStatisticContainer>
              <StyledStatisticContainer>
                <h1>26</h1>
                <p className="no-margin medium upper-case">
                  Average age a young person leaves home and is fully
                  self-sufficient
                </p>
              </StyledStatisticContainer>
            </Flex>
          </Flex>
        </StyledByTheNumbersSection>
      </StyledInformationSection>
      <StyledInformationSection pinkBackground>
        <StyledBindingContainer alignItems="center">
          <StyledIconContainer right>
            <StyledIcon src="/images/food.png" />
            <p className="header no-margin pink">Project Dignity</p>
            <p className="small no-margin">
              Project Dignity bags cost about $100.
            </p>
            <p className="small no-margin">
              We fundraise for supplys and volunteer to pack & deliver bags.
            </p>
            <StyledIconSectionLink
              href="https://letitbeus.org/donate-to-let-it-be-us/"
              className="primary"
            >
              Donate
            </StyledIconSectionLink>
          </StyledIconContainer>
          <StyledAboutSectionContent>
            Historically, we have focused our fundraising efforts toward
            benefitting a program known as Project Dignity. Many children,
            especially teens, enter the foster care system with nothing but the
            clothes on their back. These children will proceed to move within
            the foster care system with their clothes and other belongings in
            plastic garbage bags. Through Project Dignity, children entering
            residential foster care receive a large duffel bag or backpack with
            new sheets, towels and a blanket, along with personal care items
            including shampoo, body wash, toothbrush, toothpaste and more. These
            supplies solve an immediate need for the children and the duffle
            bags allow them to move within the foster care system in a bag that
            allows them the dignity that they deserve. These duffle bags are
            delivered to agencies, residential home or group homes and they are
            provided at no cost. College Care Packages have also been designed
            to be delivered to older teens in foster care who have entered
            college. The packages include new school supplies and personal care
            items.
          </StyledAboutSectionContent>
        </StyledBindingContainer>
      </StyledInformationSection>
      <StyledInformationSection bind mobileReverse>
        <Flex flexDirection="column" alignItems="center">
          <StyledAboutSectionContent>
            More recently, our group has partnered with Lydia Home, a group home
            located in Chicago. Lydia Home houses foster children who would
            otherwise have nowhere to go. Unfortunately, children who live in
            group homes don't always get to experience life the way that you
            might think a typical child should. The State of Illinois provides
            some funding to Lydia Home, but it is barely enough to feed the
            children who live there daily, let alone pay the utility bills.
          </StyledAboutSectionContent>
          <StyledAboutSectionContent>
            Our intention is to form meaningful relationships with the children
            who live at Lydia Home through sponsored dinners and outings. 4
            times a year we will host a dinner for the residents of Lydia Home.
            We typically order pizza or make food for the kids and then just
            hang out and get to know eachother. Additionally, we aim to hold 4
            outings with the kids throughout the year. Wheter these are movie
            outings, visits to the zoo or just a bike ride down the Lake Shore
            path, we see that forming meaningful relationships with these kids
            and helping to provide them with memorable experiences is essential
            to their success.
          </StyledAboutSectionContent>
        </Flex>

        <StyledIconContainer left>
          <StyledIcon src="/images/home.png" />
          <p className="header no-margin pink">Group Home Sponsors</p>
          <p className="small no-margin">
            We host dinners & outings for children in group homes.
          </p>
          <p className="small no-margin">
            Come join us in making a difference in a child's life.
          </p>
          <StyledIconSectionLink href="" className="primary">
            Volunteer
          </StyledIconSectionLink>
        </StyledIconContainer>
      </StyledInformationSection>
      <StyledInformationSection bind column>
        <StyledAboutSectionContent className="center">
          <h3>
            We are always looking for new ways to help children throughout
            Illinois who are living in foster care. If you are interested in
            getting involved or if you have a specific need that you think our
            group can help you with, please don’t hesitate to reach out!
          </h3>
        </StyledAboutSectionContent>
        <a className="primary">Join Us</a>
      </StyledInformationSection>
    </StyledAboutPageContainer>
  </div>
);

export default About;
