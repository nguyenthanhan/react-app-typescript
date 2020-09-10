import React, { FC, useState, useCallback, memo, useEffect } from 'react';
import styled from 'styled-components';

const H2Styles = styled.h2`
  color: white;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
`;

const AppFooter = styled.footer`
  background-color: #282c34;
  /* min-height: 80vh; */
  display: flex;
  font-size: calc(10px + 2vmin);
`;

export interface ClockProps {
  showButton?: boolean;
  onClickHandler?: () => void;
}

const Clock: FC<ClockProps> = ({ onClickHandler, showButton = false }) => {
  //   console.log("Clock is rendered!");
  const [date, setDate] = useState<string>(new Date().toTimeString());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date().toTimeString());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const handleClick = useCallback(() => {
    onClickHandler && onClickHandler();
  }, [onClickHandler]);

  return (
    <AppFooter>
      {showButton && <Button onClick={handleClick}>{}</Button>}
      <H2Styles>{date}</H2Styles>
    </AppFooter>
  );
};

export default memo(Clock);
