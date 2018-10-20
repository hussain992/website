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
  @media only screen and (max-width: 767px) {
    bottom: auto;
    height: auto;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    bottom: auto;
    height: auto;
  }

`;

const BFText = styled(Text)`
  text-shadow: 1px 1px 0px #444444;
`;

const Price = styled(Text)`
  color: #dfc691;
  font-size: 36px;
  letter-spacing: 1.8;
  line-height: 0.8;
  @media only screen and (max-width: 767px) {
    font-size : 23px;
  }
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
  @media only screen and (max-width: 767px) {
    margin-top: 30px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 30px;
  }
`;

const StyleBox = styled(Box)`
  bottom: -6px;
`;

const CardBox = styled(Box)`
  overflow: hidden;
`
export default class breakfast extends Component {
  render() {
    return (
      <StyleBox height={["960px","550px","auto"]} position="relative">
        <Box height={['400px','550px','auto']}>
          <img height="100%" width="100%" src="https://website.s3.nl-ams.scw.cloud/fourth-section-jpg.png"/>
        </Box>
        <Absolute>
          <Container>
            <Flex flexDirection={["Column","row","row"]}>
              <Box width={[1,0.4,0.5]} >
                <Text textAlign="center" pt={4} fontSize={[35,40,60]} fontWeight="bold" letterSpacing="3px" lineHeight={1} color="white">Breakfast</Text>
                <BFText pb={[3,3,5]} textAlign="center" fontSize={[14,14,17]} fontWeight="bold" letterSpacing="1px" color="#c8a593"> 7AM BREAKFAST? WE’RE OPEN! </BFText>
                <Box>
                  <Text textAlign="center" fontSize={[20,25,30]} fontWeight="bold" letterSpacing="1.5px" color="white" pt={[1,3]}>Full Breakfast</Text>
                  <Text textAlign="center" fontSize={16} fontWeight="bold" letterSpacing="0.8px" color="#c2beba" pt={[0,1]}> Duis ut tortor, et risus, vulputate pretium </Text>
                  <Price textAlign="center" pt={[1,3]} pb={[2,2,3]}> $12.49 </Price>
                </Box>
                <Box>
                  <Text textAlign="center" fontSize={[20,25,30]} fontWeight="bold" letterSpacing="1.5px" color="white" pt={[1,3]}>Toast & Jam </Text>
                  <Text textAlign="center" fontSize={16} fontWeight="bold" letterSpacing="0.8px" color="#c2beba" pt={[0,1]}> Suspendisse, tempus, nterdum</Text>
                  <Price textAlign="center" pt={[1,3]} pb={[2,3,4]}> $4.90 </Price>
                </Box>
                <Box>
                  <Text textAlign="center" fontSize={[20,25,30]} fontWeight="bold" letterSpacing="1.5px" color="white" pt={[1,3]}> Muffins </Text>
                  <Text textAlign="center" fontSize={16} fontWeight="bold" letterSpacing="0.8px" color="#c2beba" pt={[0,1]}> Fusce eget dui sodales est</Text>
                  <Price textAlign="center" pt={[1,3]} pb={1}> $3.95 </Price>
                </Box>
              </Box>
              <CardBox width={[1,0.6,0.5]} position="relative" mt={4}>
                <Box width={['150%','100%']}>
                  <img width="100%" src="https://website.s3.nl-ams.scw.cloud/est-1893-jpg.png" />
                </Box>
                <BFCard pr={[20,130,180]} position="absolute" pt={4}>
                  <Flex py={[3,3]} justifyContent="center" width={1} justifyContent="space-around">
                    <Text color="#56534c" fontSize="14px"> EST </Text>
                    <Text color="#56534c" fontSize="14px"> 1893 </Text>
                  </Flex>
                  <Text pt={5} fontWeight="bold" letterSpacing="1px" textAlign="center" px={[2,2,5]} pt={[4,3,5]} pb={[1,2,3]} fontSize={[28,28,36]} lineHeight={["40px","40px","50px"]} letterSpacing="1px"> Your morning Escape with Flair </Text>
                  <Text pt={[3,3,4]} px={[2,2,5]} textAlign="center" fontSize={14} lineHeight="30px"> 
                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  </Text>
                  <Flex justifyContent="center">
                    <ReadButton> read </ReadButton>
                  </Flex>
                </BFCard>
              </CardBox>
            </Flex>
          </Container>
        </Absolute>
      </StyleBox>
    )
  }
}