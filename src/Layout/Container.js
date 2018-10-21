import React, { Component } from 'react';
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 1170px;
  // padding: 0 15px;
  margin: 0 auto;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 750px
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 970px;
  }
`;
export default class Container extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <StyledContainer>
        {this.props.children}
      </StyledContainer>
    )
  }
}
