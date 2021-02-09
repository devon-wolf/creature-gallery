import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import style from './ImageList.module.css'

export default class ImageList extends Component {
	render() {
		return (
			<ul className={style.list}>
				{this.props.creatures}
			</ul>
		)
	}
}
