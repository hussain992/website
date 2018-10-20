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
import PancakeDetails from './PancakesDetails';



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
  padding-bottom: 5px;
`;

const StyleBox = styled(Box)`
  bottom: -12px;
`;

const StyledContainer = styled.div`
  padding-right: 120px;
  @media only screen and (max-width: 767px) {
    padding-right: 15px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding-right: 0px;    
  }
`;
export default class pancakes extends Component {
  render() {
    return (
      <StyleBox  position="relative">
        <img width="100%" src="https://website.s3.nl-ams.scw.cloud/third-section-bg-jpg.png"/>
        <Absolute>
          <StyledContainer>
            <Box display={['none','none','block']} py={0} position="relative">
              <img src="https://website.s3.nl-ams.scw.cloud/tasty-pancakes-jpg.png" width="100%"/>
              <InnerImage>
                <Box position="relative" width="100%" height="100%">
                  <img src="https://website.s3.nl-ams.scw.cloud/text-bg-jpg.png"/>
                  <PancakeDetails/>
                </Box>
              </InnerImage>
            </Box>
            <Box display={['block','block','none']}>
              <Flex alignItems="center" width={1} mx="auto">
                <Box width={['150px','250px']}>
                  <img width="100%" src="https://website.s3.nl-ams.scw.cloud/cake-small.png" />
                </Box>
              </Flex>
              <Box>
                <PancakeDetails/>
              </Box>
            </Box>
          </StyledContainer>
        </Absolute>
      </StyleBox>
    )
  }
}