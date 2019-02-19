import React, { Component } from 'react';

class CoolButton extends Component {
  render() {
    return ( //include text for defining className within button
     <button>{this.props.children}</button>
    );
  }
}

export default CoolButton;