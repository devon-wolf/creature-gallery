import React, { Component } from 'react'
import style from './ImageItem.module.css'

export default class ImageItem extends Component {
	render() {
		return (
			<li className={style.li}>
				This is an item.
			</li>
		)
	}
}
