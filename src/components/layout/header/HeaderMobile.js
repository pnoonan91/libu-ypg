import * as React from "react";
import styled, { css } from "styled-components";
import { Flex, Box } from "@rebass/grid";
import { Link } from "react-router-dom";

//
// --- Styled Components ---
const StyledMobileLogo = styled.img`
  height: 50px;
`;

const StyledMenuButtonContainer = styled(Flex)`
  flex-grow: 1;
`;

const StyledMenuButton = styled.i`
  color: ${props => props.theme.colors.primaryGray};
  font-size: 1.25rem;
  margin: auto;
`;

const StyledNavItem = styled(Box)`
  border-bottom: 1px solid ${props => props.theme.colors.primaryGray};
  display: block;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
`;

const StyledFadeScreen = styled.div`
  background: ${props => props.theme.colors.primaryGray};
  display: block;
  position: fixed;
  opacity: 0.5;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 0.15s ease-in-out;
  z-index: 999;
  height: 100vh;
  visibility: ${props => (props.isOpen ? "hidden" : "visible")};
`;

const openStateStyles = css`
  transform: translateX(0, 0);
  transform: translate3d(0, 0, 0);
`;

const closedStateStyles = css`
  transform: translateX(210vw, 0);
  transform: translate3d(210vw, 0, 0);
`;

const StyledMobileMenu = styled.div`
  position: fixed;
  overflow-y: auto;
  z-index: 1000;
  height: 100vh;
  width: 200px;
  background-color: white;
  top: 0;
  right: 0;
  text-transform: uppercase;
  transition: all 0.4s ease;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.overlayShadow};
  ${props => (props.isOpen ? openStateStyles : closedStateStyles)};
`;

//
// --- Header Mobile Component ---

class HeaderMobile extends React.Component {
  state = {
    isOpen: false
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleKeyboardEsc = event => {
    if (event.key === "Escape" && this.state.isOpen) {
      event.preventDefault();
      this.handleClose();
    }
  };
  render() {
    const { isOpen } = this.state;
    const { links } = this.props;

    const mappedLinks = links.map(link => (
      <StyledNavItem onClick={this.handleClose} key={`${link.text}-nav-item`}>
        <Link to={link.path}>{link.text}</Link>
      </StyledNavItem>
    ));
    return (
      <header>
        <StyledFadeScreen isOpen={!isOpen} onClick={this.handleClose} />
        <StyledMobileMenu isOpen={isOpen}>
          <StyledNavItem onClick={this.handleClose}>
            <i className="far fa-times-circle" /> Close
          </StyledNavItem>
          <nav>{mappedLinks}</nav>
        </StyledMobileMenu>
        <Flex justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Flex alignItems="center">
              <StyledMobileLogo src={this.props.logo} />
              <h3>{this.props.logoText}</h3>
            </Flex>
          </Link>
          <StyledMenuButtonContainer onClick={this.handleOpen}>
            <StyledMenuButton className="fas fa-bars" />
          </StyledMenuButtonContainer>
        </Flex>
      </header>
    );
  }
}

export default HeaderMobile;
