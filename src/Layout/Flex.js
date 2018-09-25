import styled from 'styled-components';
import {
  space,
  height,
  width,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  color,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  alignContent,
  radii,
} from 'styled-system'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  font-family:"karla";
  ${space}
  ${height}
  ${width}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${alignContent}
  ${color}
  ${radii}
`;

export default Flex;