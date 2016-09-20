import WriteBox from './WriteBox'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

export default connect(
	state => ({}),
	dispatch => ({
		goToFinder: () => dispatch(push('/finder'))
	})
)(WriteBox)
