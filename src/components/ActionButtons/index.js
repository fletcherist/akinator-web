import ActionButtons from './ActionButtons'
import { connect } from 'react-redux'
import { addToHistory } from '../../actions/history'
import { bindActionCreators } from 'redux'
import { sendFeedback } from '../../actions/finder'
import { addToFavourite } from '../../actions/finder'
console.log(addToHistory)
export default connect(
	state => ({
		finder: state.finder
	}),
	dispatch => ({
		addToHistory: payload => dispatch(addToHistory(payload)),
		sendFeedback: () => dispatch(sendFeedback()),
		addToFavourite: payload => dispatch(addToFavourite(payload))
	})
)(ActionButtons)
