import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import Navegation from './components/Navegation.js';

class App extends Component {
  state = {
    title: 'My awesome academy',
    publications: []
  };

  componentDidMount() {
    const integrationToken = '2c0f6adb192f94e8334d4c53aa1312742e6783c95308ed13c3bebd757dfb0f96b';
    const userId = '16f54e083713bfaf53ef2df967a4f520d7e8ba94847b1881bce4e20f93db90aa6';

    // const userId = '21750c0ae974ae4ba4d672eabaaf71153174fe34a0ff991871f93ac77ec8d0684';
    const url = `https://cors-anywhere.herokuapp.com/https://api.medium.com/v1/users/${userId}/publications`;
    axios.get(url, {
      headers: { Authorization: `Bearer ${integrationToken}` }
    }).then((response) => {
      const publications = response.data.data;
      this.setState({ publications });
    });
  }

  render() {
    const publications = this.state.publications;
    console.log(publications);
    const title = this.state.title;
    return (

      <div className="App">
        <Navegation></Navegation>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>{title}</h1>
            <ul>
              {publications.map((publication) => {
                return (
                  <li key={publication.id}>
                    <img src={publication.imageUrl}></img>
                    <strong>{publication.name}</strong>
                    <p>{publication.description}</p>
                  </li>
                );
              })}
            </ul>           
        </header>
      </div>
    );
  }
}

export default App;
