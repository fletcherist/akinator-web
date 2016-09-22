import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import {
  Card, CardActions, CardHeader, CardMedia,
  CardTitle, CardText} from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import PageView from 'material-ui/svg-icons/action/find-replace'
import s from './WriteBox.scss'
import { push } from 'react-router-redux'

export default class WriteBox extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
		console.log(this.form.getValue())
		let value = this.form.getValue()
		if (!value) return false
		this.props.sendName(value)
		this.goToFinder()
    e.preventDefault()
  }

	goToFinder () {
		setTimeout(() => {
			this.props.goToFinder()
		}, 200)
	}
  render () {
    return (
      <div className={s.container}>
        <form onSubmit={this.handleSubmit}>
					<h1 className={s.title}>Расскажите, кому выбираем подарок?</h1>
					<h3 className={s.subtitle}>Маме? Подруге-скромнице?   Может, обаятельному спортсмену? Проявите фантазию)</h3>
					<div className={s.subcontainer}>
	          <Paper>
	            <CardActions>
	              <TextField
	                hintText={'Кому'}
									ref={r => this.form = r}
	                fullWidth
	              />
	            </CardActions>
	          </Paper>
	          <div className={s.buttonHolder}>
	            <RaisedButton
								onClick={() => this.handleSubmit()}
	              style={{margin: '0px auto', width: '100%'}}
	              icon={<PageView />}
	              label='Приступить'
	            />
	          </div>
					</div>
        </form>
      </div>
    )
  }
}

WriteBox.propTypes = {
	sendName: PropTypes.func.isRequired
}
