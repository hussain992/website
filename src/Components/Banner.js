import React, { Component } from 'react'
import styled from 'styled-components';
import { space } from 'styled-system';
import Container from '../Layout/Container';
import Text from '../Layout/Text';
import Flex from '../Layout/Flex';
import Box from '../Layout/Box';

const Align = styled.div`
  top: 0;
  img {
    width:100%;
    height: 700px;
  }
`
export default class Banner extends Component {
  render() {
    return (
      <Align position="absolute">
        <img src="/Static/assets/hero-jpg.png" />        
      </Align>
    );
  }
}