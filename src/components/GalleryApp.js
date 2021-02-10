import React from 'react';
import '../App.css';
// import creatureData from '../data/image-data.js';
import { filterByStringAndNumber } from './utils/utils.js'
import Header from './Header.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';

export default class GalleryApp extends React.Component {
	state = {
		keyword: '',
		horns: ''
		}

  	render() {
    	const filteredData = filterByStringAndNumber(this, 'keyword', 'horns', this.props.data);

    return (
      <div className="App">
        <Header />

        <Dropdown 
        label="Creature:" 
        options={this.props.data} 
        property="keyword" 
        handleChange={
          (e) => { this.setState({ keyword: e.target.value })}
        }/>

        <Dropdown 
        label="Number of horns:" 
        options={this.props.data} 
        property="horns" 
        handleChange={
          (e) => { this.setState({ horns: e.target.value })}
        }/>

        <ImageList creatures={filteredData} />
      </div>
    );
  }
}