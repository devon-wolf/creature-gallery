import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import style from './ImageList.module.css'

export default class ImageList extends Component {
	render() {
		return (
			<ul className={style.list}>
				<ImageItem />
				<ImageItem />
				<ImageItem />
				<ImageItem />
				<ImageItem />
				<ImageItem />
			</ul>
		)
	}
}
