import React from 'react';
import ActionButton from '../atoms/action-button';

class IndexPage extends React.Component {
  render() {
    return (
      <main
        role="main">

        <ActionButton
          className="primary"
          text="Primary Button" />

        <ActionButton
          className="warning"
          text="Warning Button" />
      </main>
    )
  }
}

export default IndexPage;
export let __hotReload = true;
