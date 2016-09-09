import Card from './Card'
import { connect } from 'react-redux'
import { loadNextGift } from '../../actions/finder'
import { bindActionCreators } from 'redux'

export default connect(
  state => ({
    finder: state.finder
  }),
  dispatch => bindActionCreators({
    loadNextGift
  }, dispatch)
)(Card)
