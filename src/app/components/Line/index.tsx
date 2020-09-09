import React, { memo } from 'react';
import styled from 'styled-components';

const HorizontalLine = styled.div`
  height: 1px;
  background-color: gray;
  /* margin: 0 1rem; */
  margin: 0 5vw;
`;

export interface LineProps {
  horizontal?: boolean;
}

export const Line: React.FC<LineProps> = ({ horizontal = false }) => {
  console.log('Line is rendered!');
  return <HorizontalLine></HorizontalLine>;
};

export default memo(Line);
