import React, { Component } from 'react'
import style from './Dropdown.module.css'
import DropdownItem from './DropdownItem.js'

export default class Dropdown extends Component {
	render() {
		const getUniqueKeywords = () => {
			let keywords = [];
			for (let i of this.props.options) {
				if (!keywords.some(word => word === i.keyword)) {
					keywords.push(i.keyword);
				}
			}
			return keywords;
		}

		return (
			<select 
			className={style.dropdown} 
			value={this.props.keyword} 
			onChange={this.props.handleChange}>
				{getUniqueKeywords().map(
					keyword => <DropdownItem keyword={keyword} key={keyword}/>)}
			</select>
		)
	}
}