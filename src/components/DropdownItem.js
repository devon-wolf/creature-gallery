import React, { Component } from 'react'
import style from './DropdownItem.module.css'

export default class DropdownItem extends Component {
	render() {
		return (
			<option className={style.dropdownItem}>
				{this.props.keyword}
			</option>
		)
	}
}
