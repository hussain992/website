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
  hover,
  focus,
  active,
  disabled,
  radii,
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
  ${hover}
  ${focus}
  ${active}
  ${disabled}
  ${zIndex}
  ${radii}
  ${borders}
  ${borderColor}
`;

export default Box;
