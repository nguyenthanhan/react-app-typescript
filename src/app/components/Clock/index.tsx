import React, { FC, useState, useCallback, memo, useEffect } from 'react';
import './index.css';
import styled from 'styled-components';

const H2Styles = styled.h2`
  color: white;
`;

export interface ClockProps {
  showButton?: boolean;
  onClickHandler: () => void;
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
    onClickHandler();
  }, [onClickHandler]);

  return (
    <footer className="App-footer">
      {showButton && (
        <button onClick={handleClick} className="Button">
          {}
        </button>
      )}
      <H2Styles>{date}</H2Styles>
    </footer>
  );
};

export default memo(Clock);
