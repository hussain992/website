import React, { Component } from 'react'
import styled from 'styled-components';
import { space } from 'styled-system';
import Container from '../Layout/Container';
import Text from '../Layout/Text';
import Flex from '../Layout/Flex';
import Box from '../Layout/Box';
import Drawer from 'react-motion-drawer';



// const NavBox = styled.div`
const NavBox = styled(Box)`
  background-color: #56534c91;
  color : white;
  padding: 20px;
  position: fixed;
  z-index: 2;
  width: 100%;
  ${space}
`;
const NavBoxSmall = styled(Box)`
  background-color: #56534c;
  color : white;
  padding: 15px 20px;
  position: fixed;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  ${space}
`;

const NavName = styled.a`
  text-transform: uppercase;
  letter-spacing: 4.2px;
  font-size: 14px;
  color: white !important;
  text-decoration: none;

`;

const StyledA = styled.a`
height: 30px;
`;

const StyledDrawer = styled(Drawer)`
  background-color: #5e5d59e8 !important;
  color: white;
`;
export default class NavBarContainer extends Component {
  state = {
    openLeft: false,
    openRight: false,
    drawerStyle: `
{
  "background-color": "#fff",
  "boxShadow": "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px"
}`,
    relativeWidth: false,
    width: 300,
    noTouchOpen: false,
    noTouchClose: false,
    activeIndex: 3
  };

  setWidth = e => {
    this.setState({
      width: Number(e.target.value) || e.target.value
    });
  };

  setTouch = e => {
    this.setState({
      [e.target.name]: !e.target.checked
    })
  }

  setDrawerStyle = e => {
    e.preventDefault()
    this.setState({
      drawerStyle: this.drawerStyleRef.value
    })
  }
  render() {
    const {
      drawerStyle: stringDrawerStyle,
      openLeft,
      openRight,
      noTouchOpen,
      noTouchClose
    } = this.state;

    let drawerStyle = {}
    try {
      drawerStyle = JSON.parse(stringDrawerStyle)
    } catch (err) {
      console.error('Error parsing JSON: ', err)
    }

    const drawerProps = {
      overlayColor: "rgba(255,255,255,0.6)",
      drawerStyle
    };

    return (
      <Box position="relative">
        <NavBox display={['none','none','block']}>
          <Container>
            <Flex alignItems="center">
              <Box>
                {/* <img src="/Static/assets/gustoso-logo-jpg.png" /> */}
                <img src="https://website.s3.nl-ams.scw.cloud/gustoso-logo-jpg.png" /> 
                
              </Box>
              <Flex width={1} mx={5} justifyContent="space-between">
                <NavName href="#"> Welcome </NavName>
                <NavName> ~ </NavName>
                <NavName href="#"> Menu </NavName>
                <NavName> ~ </NavName>
                <NavName href="#"> Reservations </NavName>
                <NavName> ~ </NavName>
                <NavName href="#"> News </NavName>
                <NavName> ~ </NavName>
                <NavName href="#"> Contact </NavName>

              </Flex>
              <Flex width={150} justifyContent="space-between">
                <img src="https://website.s3.nl-ams.scw.cloud/logo-facebook-jpg.png" />
                <img src="https://website.s3.nl-ams.scw.cloud/logo-instagram-jpg.png" />               
                <img src="https://website.s3.nl-ams.scw.cloud/logo-twitter-jpg.png" />                             
              </Flex>
            </Flex>
          </Container>
        </NavBox>
        <Box display={['block','block','none']}>
          <NavBoxSmall >
            <StyledA onClick={() => this.setState({ openLeft: !openLeft, openRight: false })}>
              <img height="30px" src="https://website.s3.nl-ams.scw.cloud/menu-button.png" ></img>
            </StyledA>
            <Flex justifyContent="center" width={1} mr={50}> 
              <img width="auto" height="30px" src="https://website.s3.nl-ams.scw.cloud/gustoso-logo-jpg.png" /> 
            </Flex>
            <StyledDrawer
              {...drawerProps}
              width={this.state.width}
              fadeOut
              open={openLeft}
              onChange={open => this.setState({ openLeft: open })}
              noTouchOpen={noTouchOpen}
              noTouchClose={noTouchClose}
            >
              {/* <ul>
                <li>Home</li>
                <li>About</li>
                <li>Settings</li>
              </ul> */}
              <Box pl={4}>
                <Text FontSize={18} fontWeight="bold" pt={3}> Welcome </Text>
                <Text FontSize={18} fontWeight="bold" pt={3}> Menu </Text>
                <Text FontSize={18} fontWeight="bold" pt={3}> Reservations </Text>
                <Text FontSize={18} fontWeight="bold" pt={3}> News </Text>
                <Text FontSize={18} fontWeight="bold" pt={3}> Contact </Text>
              </Box>
            </StyledDrawer>
          </NavBoxSmall>
        </Box>
      </Box>
    )
  }
}
