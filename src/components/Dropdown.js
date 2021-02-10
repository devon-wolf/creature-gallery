import React, { Component } from 'react'
import style from './Dropdown.module.css'
import { getUniqueListItems } from './utils/utils.js'
import DropdownItem from './DropdownItem.js'

export default class Dropdown extends Component {
	render() {
		// const getUniqueListItems = (property) => {
		// 	let listItems = [];
		// 	if (property === 'keyword') {
		// 		for (let i of this.props.options) {
		// 			if (!listItems.some(n => n === i.keyword)) {
		// 			listItems.push(i.keyword);
		// 			}
		// 		}
		// 	}
		// 	else if (property === 'horns') {
		// 		for (let i of this.props.options) {
		// 			if (!listItems.some(n => n === i.horns)) {
		// 				listItems.push(i.horns);
		// 			}
		// 		}
		// 	}
		// 	return listItems;
		// }

		return (
			<label className={style.dropdownLabel}>
				{this.props.label}
				<select 
				className={style.dropdown} 
				value={this.props.keyword} 
				onChange={this.props.handleChange}>
					{getUniqueListItems(this.props.property, this.props.options).map(
						n => <DropdownItem displayText={n} key={n}/>)}
				</select>
			</label>
		)
	}
}