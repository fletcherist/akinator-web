import React from 'react'
// import DuckImage from '../assets/Duck.jpg'
// import classes from './HomeView.scss'
import Header from 'components/Header'
import Social from 'components/Social'
import { Gift1, Brain1 } from 'components/Gifts/Gifts'
import Footer from 'components/Footer'
import StartButton from 'components/StartButton'
import Card from 'components/Card'

export const HomeView = () => (
  <div>
    <Header />
    <StartButton />
    <Social />
    <Gift1 />
    <Brain1 />
    <Footer />
  </div>
)

export default HomeView
