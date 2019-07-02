
import React from 'react';
import DataForLogo from 'data/DataForLogo';



class Logo extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //
  //   };
  // }

  state = {
    width: '',
    height: '',
    fontText: '',

  };

  render() {
    const { width, height, fontText } = this.state // вытащили visible из this.state

    return (
      <div>
        <DataForLogo width={width} height={height} fontText={fontText}/>
      </div>
    );
  }
}

export default Logo;
