import React, { Component, PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import {
	LOADING,
	SUCCESS,
	ERROR
} from '../../constants/actionTypes'

class GiftCard extends Component {
  componentWillMount () {
    const { loadNextGift } = this.props
    loadNextGift()
  }

	renderGiftCard () {
		const { gift, questionType, questionId, status } = this.props.finder
		const { name, giftId, imageUrl, price } = gift
		// switch (questionType) {
		//
		// }
		return (
      <Card
        style={{margin: '0px auto', width: '100%'}}>
        <CardMedia
          overlay={
            <CardTitle title={name} subtitle={`от ${price}₽`} />
          }>
          <img style={{height: '400px'}} src={imageUrl} />
        </CardMedia>
      </Card>
    )
	}

	renderPreloader () {
		return (
			<Card
        style={{margin: '0px auto', width: '100%'}}>
        <CardMedia
          overlay={
            <CardTitle title='123' subtitle={`от ${123}₽`} />
          }>
          <img style={{height: '400px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}} />
        </CardMedia>
      </Card>
		)
	}

  render () {
		const { gift, questionType, questionId, status } = this.props.finder
		switch (status) {
			case LOADING:
				return this.renderPreloader()
			case SUCCESS:
				return this.renderGiftCard()
			case ERROR:
				return this.renderError()
		}

  }
}

GiftCard.propTypes = {
  loadNextGift: PropTypes.func.isRequired,
  finder: PropTypes.object.isRequired
}

export default GiftCard
