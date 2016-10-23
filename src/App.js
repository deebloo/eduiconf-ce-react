import './edui-name-card';

import React from 'react';
import './App.css';

class App extends React.Component {
  get userData() {
    return {
      firstName: 'Danny',
      lastName: 'Blue',
      company: 'LiveSafe'
    }
  }

  componentDidMount() {
    this.userCard.user = this.userData;

    this.userCard.addEventListener('greet', (e) => {
      alert(e.detail.firstName + ' Says Hello');
    });
  }

  render() {
    return (
      <div>
        <edui-name-card ref={card => this.userCard = card}></edui-name-card>
      </div>
    );
  }
}

export default App;
