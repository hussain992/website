import React, { Component } from 'react';
import styled from 'styled-components';
import Text from '../Layout/Text';
import Flex from '../Layout/Flex';
import Box from '../Layout/Box';
import Container from '../Layout/Container';

const GrayBox = styled(Box)`
  background-color: #f3f1e9;

`;

const Capital = styled(Text)`
  text-transform: uppercase;
`;

const BgImgBox = styled(Box)`
  background-image: url('/Static/assets/vektor-smartobjekt-windmill-jpg.png');
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
`;
export default class pancakes extends Component{
  render() {
    return (
      <GrayBox pt={3}>
        <Container >
          <BgImgBox pt={80}>
            <Text fontSize={48} fontWeight="bold" lineHeight="35px" textAlign="center" letterSpacing="1.2px"> The Jibarito sandwich </Text>
          </BgImgBox>
          <Capital py={2} fontWeight="bold" fontSize={14} lineHeight="30px" textAlign="center" letterSpacing="1.4px" color="#a47d5e"> the best sandwich you’ve ever tasted!</Capital>
          <Flex>
            <Box width={0.3}>
              <Box>
                <img src="class-aptent-jpg.png" />
                <Text></Text>
                <Text></Text>
              </Box>
            </Box>
            <Box width={0.7}>

            </Box>
          </Flex>
        </Container>
      </GrayBox>
    )
  }
}