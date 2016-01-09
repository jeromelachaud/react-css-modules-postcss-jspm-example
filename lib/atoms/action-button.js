import React from 'react';
import styles from './action-button.css!';

class ActionButton extends React.Component {
  render() {
    return (
      <button
        className={styles[this.props.className]}>
        {this.props.text}
      </button>
    );
  }
}

export default ActionButton;
