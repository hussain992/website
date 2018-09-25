import React, { Component } from 'react';
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`
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
