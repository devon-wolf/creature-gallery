import React, { Component } from 'react'
import style from './Dropdown.module.css'
import DropdownItem from './DropdownItem.js'

export default class Dropdown extends Component {
	render() {
		return (
			<select 
			className={style.dropdown} 
			value={this.props.keyword} 
			onChange={this.props.stateFunction}>
				{this.props.options.map(option => <DropdownItem keyword={option.keyword} />)}
			</select>
		)
	}
}