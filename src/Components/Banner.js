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
  font-size: 24px;
  line-height: 1.5;
  text-shadow: 0px 1px 0 #3d3029;
  width: 550px;
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
`;
const AlignImage =styled(Flex)`
  position: absolute;
  bottom: 42px;
  left: 0;
  right: 0;
  text-align:center;
  margin: 0 auto;
`;
const White = styled(Flex)`
  border-radius: 50%;
  position: absolute;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
export default class Banner extends Component {
  render() {
    return (
      <Box mb={5} position="relative" height={900}>
        <Image src="https://website.s3.nl-ams.scw.cloud/hero-jpg.png" /> 
        {/* <Align position="absolute"> */}
          <BannerFlex justifyContent="center" alignItems="center" width={1}>
            <Tagline color="white" fontSize={92}>Pastry with love </Tagline>
            <Box pt={4}>
              <Line/>
              <Dashed/>
            </Box>
            <Info fontFamily="proxima" color="white" textAlign="center" py={5}>
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
      </Box>
    );
  }
}