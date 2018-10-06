import React, { Component } from 'react';
import styled from 'styled-components';
import Text from '../Layout/Text';
import Flex from '../Layout/Flex';
import Box from '../Layout/Box';
import Container from '../Layout/Container';



const Absolute = styled(Flex)`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const InnerImage = styled(Flex)`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  height: auto;
`

export default class ArtCake extends Component {
  render() {
    return (
      <Box position="relative">
        <img src="/Static/assets/third-section-bg-jpg.png"/>
        <Absolute>
          <Container>
            <Box py={5} position="relative">
              <img src="/Static/assets/tasty-pancakes-jpg.png"/>
              <InnerImage>
                <img src="/Static/assets/text-bg-jpg.png"/>
              </InnerImage>
            </Box>
          </Container>
        </Absolute>
      </Box>
    )
  }
}