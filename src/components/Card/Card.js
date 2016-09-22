import React, { Component, PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'

class GiftCard extends Component {
  componentWillMount () {
    const { loadNextGift } = this.props
    loadNextGift()
  }

  render () {
		const { gift } = this.props.finder
    const { name, giftId, imageUrl, price, status } = gift
    return (
      <Card
        style={{
          margin: '0px auto',
          width: '100%',
        }}>
        <CardMedia
          overlay={
            <CardTitle title={name} subtitle={`от ${price}₽`} />
          }>
          <img style={{height: '400px'}} src={imageUrl} />
        </CardMedia>
      </Card>
    )
  }
}

GiftCard.propTypes = {
  loadNextGift: PropTypes.func.isRequired,
  finder: PropTypes.object.isRequired
}

export default GiftCard
