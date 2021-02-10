import React, { Component } from 'react'
import style from './Header.module.css'

export default class Header extends Component {
	render() {
		return (
			<header className={style.header}>
				<h1>Gallery of Horn<strike className={style.strikeout}>y</strike>ed Creatures</h1>
			</header>
		)
	}
}
