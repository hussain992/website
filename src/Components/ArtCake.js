import React, { Component } from 'react';
import styled from 'styled-components';
import Text from '../Layout/Text';
import Flex from '../Layout/Flex';
import Box from '../Layout/Box';
import Container from '../Layout/Container';

const ArtText = styled(Text)`
  color: #56534c;
  letter-spacing: 1.2px;
`;
const ArtsubText = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 1.4px;
`;
const ArtContent = styled(Text)`
  letter-spacing: 1.4px;

`;
const ChefName = styled(Text)`
  border-top: 1px solid #d7d5ca;
  padding: 20px 10px;
  margin: 20px 30px;
  border-bottom: 1px solid #d7d5ca;
  @media only screen and (max-width: 767px) {
    margin: 0px 20px;
`;
const LeftQuote = styled(Text)`
  align-self: flex-start;
`;

const QuoteText = styled(Text)`
  align-self: center;
`;

const RightQuote = styled(Text)`
  align-self: flex-end;
`;

const TasteTag = styled(Box)`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Label = styled(Box)`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 30px;
  text-transform : uppercase;
  width: 150px;
  margin: 0 auto;
  text-align: center;
  @media only screen and (max-width: 767px) {
    font-size: 22px;
  }
  
`;

const RelativeFlex = styled(Flex)`
  position:relative;
`;
export default class ArtCake extends Component {
  render() {
    return (
      <Container>
        <Flex width={1} flexDirection={["column","column","row"]} py={4} alignItems="center">
          <Box>
            <ArtText fontWeight="bold" textAlign="center" fontSize={[38,48]}> 
              Art of cakes 
            </ArtText>
            <ArtsubText fontWeight="bold" textAlign="center" fontSize={14} color="#a47d5e">
              we create delicious memories 
            </ArtsubText>
            <ArtContent fontFamily="proxima" textAlign="center" pt={[4,5]} mx={[2,4]} fontSize={14} color="#56534c" lineHeight={"24px"}>
              Quisque rutrum. Aenean imperdiet.Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
              sit amet adipiscing sem neque sed.
            </ArtContent>
            <Text fontSize={[21,24]} fontWeight="bold" py={4} letterSpacing="0.6px" color="#56534c" textAlign="center">
              Chef Cook
            </Text>
            <Flex justifyContent="center" alignItems="center">
              <ChefName fontSize={[21,24]} letterSpacing="0.6px" color="#56534c">
                Benito
              </ChefName>
              <Box width={['65px','100px']} height={['65px','100px']}>
                <img width="100%" height="100%" src="https://website.s3.nl-ams.scw.cloud/chef-cook-jpg@3x.png"/>
              </Box>
              <ChefName fontSize={[21,24]} letterSpacing="0.6px" color="#56534c">
                Gaspare
              </ChefName>
            </Flex>

              <Flex mb={3} height={90} justifyContent="center" pt={[3,4]}>
                <LeftQuote fontFamily="timespsmt" color="rgba(86, 83, 76, 0.2)" lineHeight="50px" fontSize={60} letterSpacing="1.5px"> &ldquo; </LeftQuote>
                <QuoteText width={[240,290]} lineHeight="30px" fontSize={24} textAlign="center" fontFamily="scriptin" color="#a47d5e">
                  Unique creations for unique occasions.
                </QuoteText>
                <RightQuote fontFamily="timespsmt" fontSize={60} letterSpacing="1.5px" lineHeight="0px" color="rgba(86, 83, 76, 0.2)"> &rdquo; </RightQuote>
              </Flex>
          </Box>
          <Box width={1} height="fit-content" position="relative">
            <Flex flexWrap="wrap">
              <Box width="50%">
                <img width="100%" src="https://website.s3.nl-ams.scw.cloud/img-top-left.png"/>                
              </Box>
              <Box width="50%">
                <img width="100%" src="https://website.s3.nl-ams.scw.cloud/img-top-right-copy-jpg.png"/>               
              </Box>
              <Box width="50%">
                <img width="100%" src="https://website.s3.nl-ams.scw.cloud/img-bottom-left-copy-jpg.png"/>                
              </Box>
              <Box width="50%">
                <img width="100%" src="https://website.s3.nl-ams.scw.cloud/img-bottom-right-copy-jpg.png"/>                
              </Box>
            </Flex>
            <TasteTag>
              <Box width={['200px','220px','260px','300px']} position="relative">
                <img width="100%" src="https://website.s3.nl-ams.scw.cloud/new-label.png"/>
                <Label color="#c9b176" >
                  taste so good!
                </Label>
              </Box>
            </TasteTag>
          </Box>            

        </Flex>
      </Container>
    )
  }
}
