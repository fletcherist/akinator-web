import FavList from './FavList'
import { connect } from 'react-redux'
export default connect(
	state => ({
		favorite: state.favorite
	})
)(FavList)
