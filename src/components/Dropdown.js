import React, { Component } from 'react'
import style from './Dropdown.module.css'
import DropdownItem from './DropdownItem.js'

export default class Dropdown extends Component {
	render() {
		const getUniqueListItems = (property) => {
			let listItems = [];
			if (property === 'keyword') {
				for (let i of this.props.options) {
					if (!listItems.some(n => n === i.keyword)) {
					listItems.push(i.keyword);
					}
				}
			}
			else if (property === 'horns') {
				for (let i of this.props.options) {
					if (!listItems.some(n => n === i.horns)) {
						listItems.push(i.horns);
					}
				}
			}

			return listItems;
		}

		return (
			<select 
			className={style.dropdown} 
			value={this.props.keyword} 
			onChange={this.props.handleChange}>
				{getUniqueListItems(this.props.property).map(
					n => <DropdownItem keyword={n} key={n}/>)}
			</select>
		)
	}
}