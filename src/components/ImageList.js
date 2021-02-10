import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import style from './ImageList.module.css'

export default class ImageList extends Component {
	render() {
		return (
			<ul className={style.list}>
				{this.props.creatures.map(creature => <ImageItem alt={creature.keyword} src={creature.url} title={creature.description} key={creature.url}/>)}
			</ul>
		)
	}
}
