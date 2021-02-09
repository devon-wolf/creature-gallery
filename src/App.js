import React from 'react';
import './App.css';
import creatureData from './data/image-data.js';
import Header from './components/Header.js';
import ImageList from './components/ImageList.js';
import Dropdown from './components/Dropdown.js';

export default class App extends React.Component {
  state = {
    keyword: ''
  }

  render() {
    return (
    <div className="App">
      <Header />
      <Dropdown options={creatureData}/>
      <ImageList creatures={creatureData}/>
    </div>
    );
  }
}
