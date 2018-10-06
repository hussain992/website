import React, { Component } from 'react'
import styled from 'styled-components';
import { space } from 'styled-system';
import Container from '../Layout/Container';
import Text from '../Layout/Text';
import Flex from '../Layout/Flex';
import Box from '../Layout/Box';



const NavBox = styled.div`
  background-color: #56534c91;
  color : white;
  padding: 20px;
  position: fixed;
  z-index: 1;
  width: 100%;
  ${space}
`;

const NavName = styled(Text)`
  text-transform: uppercase;
`;
export default class NavBarContainer extends Component {
  render() {
    return (
      <NavBox>
        <Container>
          <Flex alignItems="center">
            <Box>
              {/* <img src="/Static/assets/gustoso-logo-jpg.png" /> */}
              <img src="https://website.s3.nl-ams.scw.cloud/gustoso-logo-jpg.png" /> 
              
            </Box>
            <Flex width={1} mx={5} justifyContent="space-between">
              <NavName> Welcome </NavName>
              <NavName> ~ </NavName>
              <NavName> Menu </NavName>
              <NavName> ~ </NavName>
              <NavName> Reservations </NavName>
              <NavName> ~ </NavName>
              <NavName> News </NavName>
              <NavName> ~ </NavName>
              <NavName> Contact </NavName>

            </Flex>
            <Flex width={150} justifyContent="space-between">
              {/* <img src="/Static/assets/logo-facebook-jpg.png" />
              <img src="/Static/assets/logo-instagram-jpg.png" />
              <img src="/Static/assets/logo-twitter-jpg.png" /> */}
              <img src="https://website.s3.nl-ams.scw.cloud/logo-facebook-jpg.png" />
              <img src="https://website.s3.nl-ams.scw.cloud/logo-instagram-jpg.png" />               
              <img src="https://website.s3.nl-ams.scw.cloud/logo-twitter-jpg.png" />                             
            </Flex>
          </Flex>
        </Container>
      </NavBox>
    )
  }
}
