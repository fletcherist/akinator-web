import React, { Component, PropTypes } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import LikeIcon from 'material-ui/svg-icons/action/favorite'
import DislikeIcon from 'material-ui/svg-icons/content/clear'
import NormasButton from 'material-ui/RaisedButton'
import s from './ActionButtons.scss'

import {
	LOADING,
	SUCCESS,
	ERROR
} from '../../constants/actionTypes'

export default class ActionButtons extends Component {
	clickHandler (feedback) {
		const { finder, addToHistory, sendFeedback } = this.props
		const { gift } = finder
		addToHistory([finder.questionId, feedback])
		sendFeedback()

	}
	render () {
		const { status } = this.props.finder
		return (
			<div className={s.container}>
				<div className={s.left}>
					<FloatingActionButton
						disabled={status === LOADING}
						onClick={() => this.clickHandler(1)}>
						<DislikeIcon />
					</FloatingActionButton>
				</div>
				<div className={s.middle} onClick={() => this.clickHandler(2)}>
					<NormasButton
						disabled={status === LOADING}
						label='вообще нормас' />
				</div>
				<div className={s.right}>
					<FloatingActionButton secondary
						disabled={status === LOADING}
						onClick={() => this.clickHandler(3)}>
					<LikeIcon />
					</FloatingActionButton>
				</div>
			</div>
		)
	}
}

ActionButtons.propTypes = {
	finder: PropTypes.object.isRequired,
	addToHistory: PropTypes.func.isReqruired,
	sendFeedback: PropTypes.func.isRequired
}
