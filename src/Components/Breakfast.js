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

const BFText = styled(Text)`
  text-shadow: 1px 1px 0px #444444;
`;

const Price = styled(Text)`
  color: #dfc691;
  font-size: 36px;
  letter-spacing: 1.8;
  line-height: 0.8;
`;

const BFCard = styled(Box)`
  top: 0;
  left: 0;
  right: 0;
`;

const ReadButton = styled(Box)`
  border: 1px solid #9e9c93;
  text-transform : uppercase;
  color: #a47d5e;
  font-size: 18px;
  padding: 15px 60px;
  font-family: ProximaNova-Regular;
  cursor: pointer;
  text-align: center;
  margin-top: 50px;
  display: inline-block;
  font-weight: bold;
`;


export default class breakfast extends Component {
  render() {
    return (
      <Box height={760} position="relative">
        <img src="/Static/assets/fourth-section-jpg.png"/>
        <Absolute>
          <Container>
            <Flex>
              <Box width={0.5} >
                <Text textAlign="center" fontSize={60} fontWeight="bold" letterSpacing="3px" lineHeight={1} color="white">Breakfast</Text>
                <BFText pb={5} textAlign="center" fontSize={17} fontWeight="bold" letterSpacing="1px" color="#c8a593"> 7AM BREAKFAST? WE’RE OPEN! </BFText>
                <Box>
                  <Text textAlign="center" fontSize={30} fontWeight="bold" letterSpacing="1.5px" color="white" pt={3  }>Full Breakfast</Text>
                  <Text textAlign="center" fontSize={16} fontWeight="bold" letterSpacing="0.8px" color="#c2beba" pt={1}> Duis ut tortor, et risus, vulputate pretium </Text>
                  <Price textAlign="center" pt={3} pb={3}> $12.49 </Price>
                </Box>
                <Box>
                  <Text textAlign="center" fontSize={30} fontWeight="bold" letterSpacing="1.5px" color="white" pt={3}>Toast & Jam </Text>
                  <Text textAlign="center" fontSize={16} fontWeight="bold" letterSpacing="0.8px" color="#c2beba" pt={1}> Suspendisse, tempus, nterdum</Text>
                  <Price textAlign="center" pt={3} pb={4}> $4.90 </Price>
                </Box>
                <Box>
                  <Text textAlign="center" fontSize={30} fontWeight="bold" letterSpacing="1.5px" color="white" pt={3}> Muffins </Text>
                  <Text textAlign="center" fontSize={16} fontWeight="bold" letterSpacing="0.8px" color="#c2beba" pt={1}> Fusce eget dui sodales est</Text>
                  <Price textAlign="center" pt={3} pb={4}> $3.95 </Price>
                </Box>
              </Box>
              <Box width={0.5} position="relative">
                <img src="Static/assets/est-1893-jpg.png" />
                <BFCard pr={150} position="absolute" pt={4}>
                  <Flex py={4} justifyContent="center" width={1} justifyContent="space-around">
                    <Text color="#56534c" fontSize="14px"> EST </Text>
                    <Text color="#56534c" fontSize="14px"> 1893 </Text>
                  </Flex>
                  <Text pt={5} fontWeight="bold" letterSpacing="1px" textAlign="center" px={5} pt={5} pb={3} fontSize={36} lineHeight="50px" letterSpacing="1px"> Your morning Escape with Flair </Text>
                  <Text pt={4} px={5} textAlign="center" fontSize={14} lineHeight="30px"> 
                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  </Text>
                  <Flex justifyContent="center">
                    <ReadButton> read </ReadButton>
                  </Flex>
                </BFCard>
              </Box>
            </Flex>
          </Container>
        </Absolute>
      </Box>
    )
  }
}