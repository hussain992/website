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
  @media only screen and (max-width: 767px) {
    font-size: 10px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;

const BgImgBox = styled(Box)`
  background-image: url('https://website.s3.nl-ams.scw.cloud/vektor-smartobjekt-windmill-jpg.png');
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
`;
const CenterBox = styled(Box)`
  text-align: center;
`;
const PreparationBox = styled(Flex)`
  position: absolute; 
  top: 0px; bottom: 0px; right: 5px;
  width: 200px;
  height: 585px;
  display: flex;
  flex-direction column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 767px) {
    height: 250px;
    width: 70px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 535px;
  }
`;

const RecipeBox = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 565px;
  left: -15px;
  width: 170px;
  padding: 15px 0px;
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 767px) {
    height: 260px;
    left: -8px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    height: 515px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 465px;
  }
`;

const RecipeButton = styled(Box)`
  border: 1px dashed #dfc691;
  padding: 15px 30px;
  background-color: white;
  font-size: 18px;
  text-transform: uppercase;
  color: #dfc691;
  @media only screen and (max-width: 767px) {
    padding: 10px 20px;
    font-size: 13px;
  }

`;

const ChefName = styled(Text)`
  border-top: 1px solid #d7d5ca;
  padding: 20px 10px;
  margin: 20px 30px;
  border-bottom: 1px solid #d7d5ca;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    margin: 0px;
    padding: 15px 10px;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    margin: 0px;
  }
`;



export default class pancakes extends Component{
  render() {
    return (
      <GrayBox pt={3}>
        <Container >
          <BgImgBox pt={[40,80]}>
            <Text fontSize={[31,48]} fontWeight="bold" lineHeight="35px" textAlign="center" letterSpacing={["0.5px","1.2px"]}> The Jibarito sandwich </Text>
          </BgImgBox>
          <Capital py={2} fontWeight="bold" fontSize={14} lineHeight="30px" textAlign="center" letterSpacing="1.4px" color="#a47d5e"> the best sandwich you’ve ever tasted!</Capital>
          <Flex flexDirection={["column","column","row"]} justifyContent="space-between" py={3}>
            <Flex flexDirection={["column","row","column"]} width={[1,1,0.21]}>
              <CenterBox mb={4}>
                <img src="https://website.s3.nl-ams.scw.cloud/class-aptent-jpg.png" />
                <Text py={3} fontWeight="bold" color="#a47d5e" fontSize={30} lineHeight="30px" letterSpacing="1px"> Class aptent </Text>
                <Text fontSize={14} lineHeight="20px" letterSpacing="1.4px"> Quot alienum persecuti ut eam, nam ad atqui primis nusquam.</Text>
              </CenterBox>
              <CenterBox mb={4}>
                <img src="https://website.s3.nl-ams.scw.cloud/nulla-eget-jpg.png" />
                <Text py={3} fontWeight="bold" color="#a47d5e" fontSize={30} lineHeight="30px" letterSpacing="1px"> Nulla eget </Text>
                <Text fontSize={14} lineHeight="20px" letterSpacing="1.4px"> Nullam dictum felis eu pede mollis pretium Integer tincidunt.</Text>
              </CenterBox>
              <CenterBox mb={4}>
                <img src="https://website.s3.nl-ams.scw.cloud/sed-nibh-purus-jpg.png" />
                <Text py={3} fontWeight="bold" color="#a47d5e" fontSize={30} lineHeight="30px" letterSpacing="1px"> Sed nibh purus </Text>
                <Text fontSize={14} lineHeight="20px" letterSpacing="1.4px">  Aenean eleifend tellus leo ligula, porttitor eu, consequat vitae.</Text>
              </CenterBox>
            </Flex>
            <Box width={[1,1,0.7]} position="relative">
              <Box height={["270px","540px","470px","586px"]}>
                <img height="100%" width="100%" src="https://website.s3.nl-ams.scw.cloud/final-section-img-copy-jpg.png" />
              </Box>
              <PreparationBox>
                <Box pb={[0,0]}>
                  <Capital color="#a47d5e" fontSize={[12,18]} fontWeight="bold" letterSpacing="1.8px" lineHeight={["px","30px"]}> prep </Capital>
                  <Text color="#56534c" fontSize={[26,60]} fontWeight="bold" letterSpacing="6px" lineHeight={0.8}> 15 </Text>
                  <Text color="#979285" fontSize={[12,18]} fontWeight="bold" letterSpacing="2px" lineHeight={["16px","30px"]} pt={2}> mins </Text>
                </Box>
                <Box pb={[0,0]}>
                  <Capital color="#a47d5e" fontSize={[12,18]} fontWeight="bold" letterSpacing="1.8px" lineHeight={["16px","30px"]}> cook </Capital>
                  <Text color="#56534c" fontSize={[26,60]} fontWeight="bold" letterSpacing="6px" lineHeight={0.8}> 35 </Text>
                  <Text color="#979285" fontSize={[12,18]} fontWeight="bold" letterSpacing="2px" lineHeight={["16px","30px"]} pt={2}> mins </Text>
                </Box>
                <Box pb={[2,0]}>
                  <Capital color="#a47d5e" fontSize={[11,18]} fontWeight="bold" letterSpacing="1.8px" lineHeight={["16px","30px"]}> ready in </Capital>
                  <Text color="#dfc691" textAlign="center" fontSize={[36,92]} fontWeight="bold" letterSpacing="6px" lineHeight={0.6}> 50 </Text>
                  <Text textAlign="center" color="#979285" fontSize={[12,18]} fontWeight="bold" letterSpacing="2px" lineHeight={["16px","30px"]} pt={2}> mins </Text>
                </Box>
              </PreparationBox>
              <RecipeBox>
                <RecipeButton>
                  full recipe  
                </RecipeButton>
              </RecipeBox>
            </Box>
          </Flex>

         <Flex flexDirection={["column","row"]} justifyContent="center" pb={3}>
            <ChefName fontSize={14} letterSpacing="4.2px" color="#56534c">
              <Flex width={[380,300,360]} mx={[0,2,3]} justifyContent="space-between" alignItems="center">
                <Capital> Our menu </Capital>
                <Capital> ~ </Capital>
                <Capital> gallery </Capital>
                <Capital> ~ </Capital>
                <Capital> culture </Capital>
              </Flex>
            </ChefName>
            <Text fontFamily="scriptin" textAlign="center" fontSize={[21,24,30]} letterSpacing="9px" mx={[3,3,4]}> Gustoso </Text>
            <ChefName fontSize={14} letterSpacing="0.6px" color="#56534c">
              <Flex width={[380,230,300,360]} mx={[0,2,3]} justifyContent="space-between" alignItems="center">
                <Capital> Events </Capital>
                <Capital> ~ </Capital>
                <Capital> Catering </Capital>
                <Capital> ~ </Capital>
                <Capital> Visit us </Capital>
              </Flex>
            </ChefName>
          </Flex>
        </Container>
      </GrayBox>
    )
  }
}