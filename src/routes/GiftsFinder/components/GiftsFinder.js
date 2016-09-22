import React, { Component } from 'react'
import Card from 'components/Card'
import ActionButtons from 'components/ActionButtons'
import s from './style.scss'

export default class GiftsFinder extends Component {
  render () {
    return (
      <div className={s.container}>
				<div className={s.sub}>
					<Card />
					<ActionButtons />
				</div>

			</div>
    )
  }
}
