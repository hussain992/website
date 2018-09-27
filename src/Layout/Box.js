import styled from 'styled-components';
import {
  space,
  maxWidth,
  minWidth,
  height,
  width,
  color,
  display,
  position,
  borders,
  borderColor,
  zIndex } from 'styled-system'


  const Box = styled.div`
  ${space}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${width}
  ${color}
  ${display}
  ${position}
  ${zIndex}
  ${borders}
  ${borderColor}
`;

export default Box;
