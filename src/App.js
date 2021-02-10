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

    const filteredForHorns = creatureData.filter(
      creature => {
        if (!this.state.horns) return true;
        return creature.horns === Number(this.state.horns);
    });

    const filterForBoth = (creature) => {
      if (!this.state.keyword && !this.state.horns) return true;

      else if (this.state.keyword && this.state.horns) {
        return filteredForKeyword.filter(
          creature => filteredForHorns.some(i => i === creature)
        );
      }
    }
    
    // filteredForKeyword.filter(
    //   creature => {
    //     return filteredForHorns.some(i => i === creature);
    //   }
    // );
    // console.log(filteredForBoth);

    return (
      <div className="App">
        <Header />
        <Dropdown options={creatureData} property="keyword" handleChange={
          (e) => { this.setState({ keyword: e.target.value })}
        }/>
        <Dropdown options={creatureData} property="horns" handleChange={
          (e) => { this.setState({ horns: e.target.value })}
        }/>
        <ImageList creatures={filteredForHorns} />
      </div>
    );
  }
}
