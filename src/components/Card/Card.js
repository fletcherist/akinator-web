import React, { Component, PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import {
	LOADING,
	SUCCESS,
	ERROR
} from '../../constants/actionTypes'
import CircularProgress from 'material-ui/CircularProgress'
import troll from './troll.png'

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
		let imageUrl = ''
		const { finder } = this.props
		const { gift } = finder
		if (gift) {
			console.log('gift is exist')
			if (gift.imageUrl) {
				console.log('image is exist')
				imageUrl = gift.imageUrl
			}
		}
		console.log('img ' + imageUrl)
		return (
			<Card
        style={{margin: '0px auto', width: '100%'}}>
        <CardMedia
          overlay={<CardTitle title subtitle />}>
					<CircularProgress color='rgba(255,235,59 ,1)' style={{
						position: 'absolute',
						left: '50%',
						marginLeft: '-30px',
						top: '30%'}}
					/>
          <img style={{height: '400px', backgroundColor: 'rgba(200,230,201 ,1)'}} src={imageUrl} />
        </CardMedia>
      </Card>
		)
	}

	renderError () {
		return (
			<Card
        style={{margin: '0px auto', width: '100%'}}>
        <CardMedia
          overlay={<CardTitle title='Наш сервер упал' subtitle='сорян' />}>
					<CircularProgress color='rgba(255,235,59 ,1)' style={{
						position: 'absolute',
						left: '50%',
						marginLeft: '-30px',
						top: '30%'}}
					/>
          <img style={{height: '400px', backgroundColor: 'rgba(200,230,201 ,1)'}} height='400px' src={troll} />
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
