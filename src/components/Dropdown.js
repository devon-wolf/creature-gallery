import React, { Component } from 'react'
import style from './Dropdown.module.css'
import DropdownItem from './DropdownItem.js'

export default class Dropdown extends Component {
	state = {
		keyword: ''
	  }

	render() {
		console.log(this.state.keyword);
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
