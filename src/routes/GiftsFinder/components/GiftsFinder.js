import React, { Component } from 'react'
import Card from 'components/Card'
import ActionButtons from 'components/ActionButtons'
import FavList from 'components/FavList'
import s from './style.scss'

export default class GiftsFinder extends Component {
  render () {
    return (
      <div className={s.container}>
				<div className={s.sub}>
					<Card />
					<ActionButtons />
					<FavList />
				</div>
			</div>
    )
  }
}
