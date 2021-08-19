import React, { Component } from 'react';
import styles from './App.css';
import NavBarr from './NavBar';
import GClass from './GClass';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <NavBarr />
        <GClass />
      </div>
    );
  }
}

export default App;
