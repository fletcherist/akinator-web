import React, { Component } from 'react'
import s from './StartButton.scss'
import RaisedButton from 'material-ui/RaisedButton'
import GiftPicture from 'material-ui/svg-icons/action/card-giftcard'

const StartButton = () => (
  <div className={s.button}>
    <RaisedButton
      label='Найти подарок'
      icon={<GiftPicture />}
    />
  </div>
)

export default StartButton
