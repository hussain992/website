import React, { Component } from 'react';
import styled from 'styled-components';
import Text from '../Layout/Text';
import Flex from '../Layout/Flex';
import Box from '../Layout/Box';
import Container from '../Layout/Container';
import OwlCarousel from 'react-owl-carousel2';
import '../css/styles.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css'



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
  top: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  height: auto;
  height: 620px;
  padding-bottom: 5px;
`;

const PancakeDetails = styled(Box)`
  position: absolute;
  top: 70px; left: 0px; right: 0px; bottom: 0;
  display: flex;
  padding: 0 100px;
  justify-content: flex-start;
  flex-direction: column;
`;

const TastyText = styled(Text)`
  text-transform : capitalize
  letter-spacing : 1.2px;  
`;

const CapitalText = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: bold;
`;
const options = {
  items: 3,
  nav: true,
  // rewind: true,
  autoplay: true,
  margin: 20,
  dots: true,
  dotsEach: true,
  navText : ["<img src='/Static/assets/left-arrow.svg'>","<img src='/Static/assets/right-arrow.svg'>"]
};

const WindImgBox = styled(Box)`
  position: Absolute;
  bottom: 0px;
  right: 0px;
`;
export default class pancakes extends Component {
  render() {
    return (
      <Box height={760} position="relative">
        <img src="/Static/assets/third-section-bg-jpg.png"/>
        <Absolute>
          <Container>
            <Box py={0} position="relative">
              <img src="/Static/assets/tasty-pancakes-jpg.png" width="100%"/>
              <InnerImage>
                <Box position="relative" width="100%" height="100%">
                  <img height="100%" src="/Static/assets/text-bg-jpg.png"/>
                  <PancakeDetails>
                    <TastyText fontSize={48} fontWeight="bold" color="#56534c"> tasty pancakes </TastyText>
                    <CapitalText pt={2} color="#a47d5e" fontSize={14}> season favourite</CapitalText>
                    <Text color="#56534c" letterSpacing="1.4px" py={5} pr={5} lineHeight={2}>
                      Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.
                    </Text>
                    <Flex>
                      <img src="/Static/assets/rating.png" />
                    </Flex>
                    <Box width={410} height={150} pt={"30px"} pl={"34px"}>
                      <OwlCarousel options={options}>
                        <Box m={"13px"}>
                          <img src="/Static/assets/tasty-pancakes-3-jpg.png" alt="The Last of us"/>
                        </Box >
                        <Box m={"13px"}>
                          <img src="/Static/assets/tasty-pancakes-2-jpg.png" alt="GTA V"/>
                        </Box >
                        <Box m={"13px"}>
                          <img src="/Static/assets/tasty-pancakes-1-jpg.png" alt="Mirror Edge"/>
                        </Box >
                        <Box m={"13px"}>
                          <img src="/Static/assets/tasty-pancakes-3-jpg.png" alt="The Last of us"/>
                        </Box >
                        <Box m={"13px"}>
                          <img src="/Static/assets/tasty-pancakes-2-jpg.png" alt="GTA V"/>
                        </Box >
                        <Box m={"13px"}>
                          <img src="/Static/assets/tasty-pancakes-1-jpg.png" alt="Mirror Edge"/>
                        </Box >
                      </OwlCarousel>
                    </Box>
                    <WindImgBox width={320}>
                      <img width="100%" src="/Static/assets/vektor-smartobjekt-windmill-jpg.png"/>
                    </WindImgBox>
                  </PancakeDetails>
                </Box>
              </InnerImage>
            </Box>
          </Container>
        </Absolute>
      </Box>
    )
  }
}