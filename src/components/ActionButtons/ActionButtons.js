import React, { Component, PropTypes } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import LikeIcon from 'material-ui/svg-icons/action/favorite'
import DislikeIcon from 'material-ui/svg-icons/content/clear'
import NormasButton from 'material-ui/RaisedButton'
import s from './ActionButtons.scss'

export default class ActionButtons extends Component {
	render () {
		return (
			<div className={s.container}>
				<div className={s.left}>
					<FloatingActionButton>
						<DislikeIcon />
					</FloatingActionButton>
				</div>
				<div className={s.middle}>
					<NormasButton
						label='вообще нормас' />
				</div>
				<div className={s.right}>
					<FloatingActionButton secondary>
					<LikeIcon />
					</FloatingActionButton>
				</div>

			</div>
		)
	}
}
