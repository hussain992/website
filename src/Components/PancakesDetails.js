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

const TastyText = styled(Text)`
  text-transform : capitalize
  letter-spacing : 1.2px;  
`;

const CapitalText = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: bold;
`;

const Capital = styled(Text)`
  text-transform: uppercase;
`;

const options = {
  items: 3,
  nav: true,
  // rewind: true,
  autoplay: true,
  margin: 20,
  dots: true,
  dotsEach: true,
  navText : ["<img src='https://website.s3.nl-ams.scw.cloud/left-arrow.png' />","<img src='https://website.s3.nl-ams.scw.cloud/right-arrow.png' />"],
  responsive:{
    0:{
        items:2,
        margin: 5
    },
    768:{
      items: 3,
    },
    1000:{
        items:3
    }
}
};

const WindImgBox = styled(Box)`
  position: Absolute;
  bottom: 0px;
  right: 0px;
`;

const TimeBox = styled(Flex)`
  top : -100px;
  right: -120px;
  position: absolute;
  margin-right: 15px;
  box-shadow: -5px 20px 40px 5px #c6c6c66b;
  @media only screen and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    right: -10px;
    margin-right: 0px;

  }
`;

const AbsBox = styled(Box)`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const PanCakeDetails = styled(Box)`
  position: absolute;
  top: 30px; left: 0px; right: 0px; bottom: 0;
  display: flex;
  padding: 0 70px;
  justify-content: flex-start;
  flex-direction: column;
  @media only screen and (max-width: 767px) {
    top: 200px;
    padding: 0 20px;
    background-color white;
    text-align: center;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    top: 400px;
  }
`;

const AlignOwl = styled(Box)`
  @media only screen and (max-width: 767px) {
    display: flex;
    width="100%";
    justify-content: center;
  }
`;

export default class pancakes extends Component {
  render() {
    return (
      <PanCakeDetails>
        <TimeBox height={[150,150,170,200]}>
          <Box width={["150px","150px","170px","200px"]} position="relative">
            <img width="100%" height="100%" src="https://website.s3.nl-ams.scw.cloud/ready-in-jpg.png" />
            <AbsBox>
              <Capital color="#a47d5e" fontSize={18} fontWeight="bold" letterSpacing="1.8px" lineHeight="30px"> ready in </Capital>
              <Text color="#dfc691" fontSize={92} fontWeight="bold" letterSpacing="6px" lineHeight={0.8}> 40 </Text>
              <Text textAlign="center" color="#979285" fontSize={18} fontWeight="bold" letterSpacing="2px" lineHeight="30px" pt={2}> mins </Text>
            </AbsBox>
          </Box>
        </TimeBox>
        <TastyText fontSize={[38,48]} fontWeight="bold" color="#56534c"> tasty pancakes </TastyText>
        <CapitalText pt={2} color="#a47d5e" fontSize={14}> season favourite</CapitalText>
        <Text color="#56534c" letterSpacing="1.4px" py={[22,44]} lineHeight={2}>
          Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.
        </Text>
        <Box display={['block','block','none']}>
          <Flex alignItems="center" justifyContent={["center","flex-start"]} pb={4}>
            <Capital color="#a47d5e" fontSize={18} fontWeight="bold" letterSpacing="1.8px" pt={2}> ready in </Capital>
            <Text color="#dfc691" fontSize={32} fontWeight="bold" letterSpacing="6px" lineHeight="20px" px={3}> 40 </Text>
            <Text textAlign="center" color="#979285" fontSize={18} fontWeight="bold" letterSpacing="2px" pt={2}> mins </Text>
          </Flex>
        </Box>
        <Box>
          <img src="https://website.s3.nl-ams.scw.cloud/rating.png" />
        </Box>
        <AlignOwl>
          <Box width={[230,410]} height={[120,150]} pt={"30px"} px={[24,34]}>
            <OwlCarousel options={options}>
              <Box m={"13px"}>
                <img src="https://website.s3.nl-ams.scw.cloud/tasty-pancakes-3-jpg.png" alt="The Last of us"/>
              </Box >
              <Box m={"13px"}>
                <img src="https://website.s3.nl-ams.scw.cloud/tasty-pancakes-2-jpg.png" alt="GTA V"/>
              </Box >
              <Box m={"13px"}>
                <img src="https://website.s3.nl-ams.scw.cloud/tasty-pancakes-1-jpg.png" alt="Mirror Edge"/>
              </Box >
              <Box m={"13px"}>
                <img src="https://website.s3.nl-ams.scw.cloud/tasty-pancakes-3-jpg.png" alt="The Last of us"/>
              </Box >
              <Box m={"13px"}>
                <img src="https://website.s3.nl-ams.scw.cloud/tasty-pancakes-2-jpg.png" alt="GTA V"/>
              </Box >
              <Box m={"13px"}>
                <img src="https://website.s3.nl-ams.scw.cloud/tasty-pancakes-1-jpg.png" alt="Mirror Edge"/>
              </Box >
            </OwlCarousel>
          </Box>
        </AlignOwl>
        <WindImgBox display={["none","none","block"]} width={290}>
          <img width="100%" src="https://website.s3.nl-ams.scw.cloud/vektor-smartobjekt-windmill-jpg.png"/>
        </WindImgBox>
      </PanCakeDetails>
    )
  }
}