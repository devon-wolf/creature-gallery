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
    const filteredCreatures = creatureData.filter(
      creature => {
			if (!this.state.keyword) return true;
			return creature.keyword === this.state.keyword;
		});

    return (
      <div className="App">
        <Header />
        <Dropdown options={creatureData} handleChange={
          (e) => { this.setState({ keyword: e.target.value })}
        }/>
        <ImageList creatures={filteredCreatures} />
      </div>
    );
  }
}
