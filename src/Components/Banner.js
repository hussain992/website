import React, { Component } from 'react'
import styled from 'styled-components';
import Container from '../Layout/Container';
import Text from '../Layout/Text';
import Flex from '../Layout/Flex';
import Box from '../Layout/Box';

const Align = styled.div`
  top: 0;
`;
const Image =styled.img`
  width:100%;
  height: 100%;
`;
const BannerFlex = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  flex-direction: column;
  background-color: #a9a9a933;
`;

const Tagline = styled(Text)`
  letter-spacing : 7px;
  text-align: center;
  font-family: playfair display;
  font-weight: bold;
`;
const Line = styled.div`
  width: 223px;
  height: 2px;
  opacity: 0.54;
  background-color: #ffffff;
`;
const Dashed = styled.div`
  
`;

const Info = styled(Text)`
  line-height: 1.5;
  text-shadow: 0px 1px 0 #3d3029;
  width: 550px;

  @media only screen and (max-width: 767px) {
    width: 80%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: auto;
  }
`;

const MenuButton = styled.div`
  width: 200px;
  height: 50px;
  background-color: #56534c80;
  display: flex;
  align-items:center;
  justify-content: center;
  border: 1px solid #9e9c93;
  font-family: Alegreya;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  @media only screen and (max-width: 767px) {
    width: 130px;
    height: 40px;
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 160px;
    height: 40px;
    font-size: 14px;
  }
`;

const AlignImage =styled(Flex)`
  position: absolute;
  bottom: 42px;
  left: 0;
  right: 0;
  text-align:center;
  margin: 0 auto;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const White = styled(Flex)`
  border-radius: 50%;
  position: absolute;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const StyleBox = styled(Box)`
  @media only screen and (max-width: 767px) {
    top: 60px;
  }
`;
export default class Banner extends Component {
  render() {
    return (
      <StyleBox mb={[44,5]} position="relative">
        <Image src="https://website.s3.nl-ams.scw.cloud/hero-jpg.png" /> 
        {/* <Align position="absolute"> */}
          <BannerFlex justifyContent="center" alignItems="center" width={1}>
            <Tagline pt={[0,40,0]}color="white" fontSize={[32,64,92]}> Pastry with love </Tagline>
            <Box pt={[2,3,4]}>
              <Line/>
              <Dashed/>
            </Box>
            <Info fontSize={[14,18,24]} fontFamily="proxima" color="white" textAlign="center" py={[2,4,5]}>
              We’re bringing you fresh ingredients every day in ways you can’t resist.</Info>
            <MenuButton> our menu</MenuButton>
          </BannerFlex>
          <AlignImage justifyContent="center">
            <White width={80} height={80}>
              {/* <img src="/Static/assets/food-jpg.png"/> */}
              <img src="https://website.s3.nl-ams.scw.cloud/food-jpg.png"/>

            </White>
          </AlignImage>

        {/* </Align> */}
      </StyleBox>
    );
  }
}