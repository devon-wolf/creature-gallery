import React, { Component } from 'react'
import style from './ImageItem.module.css'

export default class ImageItem extends Component {
	render() {
		return (
			<li className={style.li}>
				<img className={style.img} alt={this.props.alt} src={this.props.src} title={this.props.title}/>
			</li>
		)
	}
}
