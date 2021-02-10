import React, { Component } from 'react'
import style from './Dropdown.module.css'
import { getUniqueListItems } from './utils/utils.js'
import DropdownItem from './DropdownItem.js'

export default class Dropdown extends Component {
	render() {
		return (
			<label className={style.dropdownLabel}>

				{this.props.label}
				
				<select 
				className={style.dropdown} 
				value={this.props.keyword} 
				onChange={this.props.handleChange}>

					{getUniqueListItems(this.props.property, this.props.options).map(
						item => <DropdownItem displayText={item} key={item}/>)}

				</select>
			</label>
		)
	}
}