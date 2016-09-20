import React, { Component } from 'react'
import s from './StartButton.scss'
import RaisedButton from 'material-ui/RaisedButton'
import GiftPicture from 'material-ui/svg-icons/action/card-giftcard'
import { Link } from 'react-router'
import { push } from 'react-router-redux'

export default class StartButton extends Component {
	handleClick () {
		setTimeout(() => {
			this.props.dispatch(push('/targeting'))
		}, 300)
	}
	render () {
		return (
			<div className={s.button}>
	      <RaisedButton
					onClick={() => this.handleClick()}
	        label='Найти подарок'
	        icon={<GiftPicture />}
	      />
		  </div>
		)
	}
}
