import React, { Component } from 'react'
import styled from 'styled-components';
import { space } from 'styled-system';
import Container from '../Layout/Container';
import Text from '../Layout/Text';


const NavBox = styled.div`
  background-color: black;
  color : white;
  padding: 20px;
  ${space}
`;

export default class NavBarContainer extends Component {
  render() {
    return (
      <NavBox>
        <Container>
          <Text> ooption 1 </Text>
        </Container>
      </NavBox>
    )
  }
}
