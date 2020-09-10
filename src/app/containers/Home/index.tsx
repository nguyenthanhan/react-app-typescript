import React from 'react';
import Main from './shared/Main';
import styled from 'styled-components';
import { Clock } from 'app/components';

interface HomePropsInterface {}

interface HomeStateInterface {}

const Container = styled.div``;

class Home extends React.PureComponent<HomePropsInterface, HomeStateInterface> {
  myRef: any;
  constructor(props: HomePropsInterface) {
    super(props);
    this.myRef = React.createRef();
  }

  onFooterClickHandler = () => {
    console.log('onClickHandler Footer');
  };

  onMainClickHandler = () => {
    console.log('onMainClickHandler Main');
  };

  handleClick = () => {
    this.myRef.current.focus();
  };

  render() {
    console.log('Home Router is rendered!');

    return (
      <Container>
        <Main title={'Main'}></Main>
        <Clock></Clock>
      </Container>
    );
  }
}

export default Home;
