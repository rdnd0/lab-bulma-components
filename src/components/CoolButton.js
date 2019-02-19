import React, { Component } from 'react';
import classNames from 'classnames';

class CoolButton extends Component {
  render() {
    const classBtn = classNames(
      { 'is-success': this.props.isSuccess },
       { 'is-small': this.props.isSmall },
       { 'is-danger': this.props.isDanger },
        { 'button': true }

    )
    return ( //include text for defining className within button
     <button className={classBtn} >{this.props.children}</button>
    );
  }
}

export default CoolButton;