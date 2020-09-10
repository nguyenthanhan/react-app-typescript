import React, { FC, memo } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import './index.css';

// const logo = require('./logo.svg');

const AppHeader = styled.header`
  background-color: #282c34;
  /* min-height: 80vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  font-size: calc(10px + 2vmin);
  color: white;
`;

const H1Styles = styled.h1`
  color: white;
`;

interface HeaderProps {}

const Header: FC<HeaderProps> = ({ children }) => {
  console.log('Header is rendered!');

  const [counter, setCounter] = React.useState<number>(0);

  const onClickHandler = React.useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <AppHeader>
      <H1Styles>Welcome</H1Styles>
      {children}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="Button">
        <Button block size="large" type="primary" onClick={onClickHandler}>
          {counter}
        </Button>
      </div>
    </AppHeader>
  );
};

export default memo(Header);
