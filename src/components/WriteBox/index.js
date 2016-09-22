import WriteBox from './WriteBox'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { sendName } from '../../actions/finder'

export default connect(
	state => ({}),
	dispatch => ({
		goToFinder: () => dispatch(push('/finder')),
		sendName: name => dispatch(sendName(name))
	})
)(WriteBox)
