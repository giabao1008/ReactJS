import React, { Component } from 'react'
import Image from './components/Image'
import Title from './components/Title'
import Description from './components/Description'
import { Provider } from 'react-redux'
import store from './redux-setup/store'
import Countdown from './components/Countdown'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        imageUrl : 'images/car.jpg',
    }
  }
  render() {
    const {imageUrl} = this.state
    return (
      <Provider store={store}>
        <Countdown/>
      </Provider>  
    )
  }
}
