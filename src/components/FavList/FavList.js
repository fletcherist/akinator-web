import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'

export default class FavList extends Component {
	render () {
		const { favorite } = this.props
		if (favorite.length === 0 ) {
			return null
		}

		return (
			<Paper>
				<List>
					<Subheader>Запомненные:</Subheader>
					{favorite.reverse().map(gift => {
						return (
							<ListItem
								primaryText={gift.name}
								leftAvatar={<Avatar src={gift.imageUrl} />}
							/>
						)
					})}
				</List>
			</Paper>
		)
	}
}
