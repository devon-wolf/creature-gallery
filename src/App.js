import React from 'react';
import './App.css';
import creatureData from './data/image-data.js';
import Header from './components/Header.js';
import ImageList from './components/ImageList.js';
import Dropdown from './components/Dropdown.js';

export default class App extends React.Component {
  state = {
      keyword: '',
      horns: ''
      }

  render() {
    const filteredForKeyword = creatureData.filter(
      creature => {
			if (!this.state.keyword) return true;
      return creature.keyword === this.state.keyword;
		});

    const filteredTwice = filteredForKeyword.filter(
      creature => {
        if (!this.state.horns) return true;
        return creature.horns === Number(this.state.horns);
      }
    );

    return (
      <div className="App">
        <Header />
        <Dropdown label="Creature:" options={creatureData} property="keyword" handleChange={
          (e) => { this.setState({ keyword: e.target.value })}
        }/>
        <Dropdown label="Number of horns:" options={creatureData} property="horns" handleChange={
          (e) => { this.setState({ horns: e.target.value })}
        }/>
        <ImageList creatures={filteredTwice} />
      </div>
    );
  }
}
