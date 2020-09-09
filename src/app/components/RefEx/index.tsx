import React from 'react';

interface RefExPropsInterface {}

interface RefExStateInterface {}

class RefEx extends React.PureComponent<RefExPropsInterface, RefExStateInterface> {
  myRef: any;
  constructor(props: RefExPropsInterface) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {}

  handleClick = () => {
    this.myRef.current.focus();
  };

  onChange = () => {};

  render() {
    console.log('RefEx is rendered!');
    return (
      <main>
        <h3>Use refs to focus input (class)</h3>
        <input name="email" onChange={this.onChange} ref={this.myRef} type="text" />
        <button onClick={this.handleClick}>Focus Input</button>
      </main>
    );
  }
}

export default RefEx;
