import './edui-name-card';

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    const card = this.nameCard;

    card.addEventListener('greet', (e) => {
      alert(e.detail.firstName + ' Says Hello!');
    });

    card.user = {
      firstName: 'Danny',
      lastName: 'Blue',
      company: 'LiveSafe'
    }
  }  

  render() {
    return (
      <edui-name-card ref={(card) => this.nameCard = card}></edui-name-card>
    );
  }
}

export default App;
