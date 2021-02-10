import React, { Component } from 'react'
import style from './Dropdown.module.css'
import creatureData from '../data/image-data.js'
import DropdownItem from './DropdownItem.js'

export default class Dropdown extends Component {
	state = {
		keyword: ''
	  }

	render() {
		console.log(this.state.keyword);
		const filteredCreatures = creatureData.filter( creature => {
			if (!this.state.keyword) return true;
			return creature.keyword === this.state.keyword;
		});
		console.log(filteredCreatures);

		return (
			<select 
			className={style.dropdown} 
			value={this.state.keyword} 
			onChange={(e) => {
				this.setState({ keyword: e.target.value });
			}}>
				{this.props.options.map(option => <DropdownItem keyword={option.keyword} />)}
			</select>
		)
	}
}
