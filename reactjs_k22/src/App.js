import React, { Component } from 'react'
import Image from './components/Image'
import Title from './components/Title'
import Description from './components/Description'

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

      <div id="main">
        <div class="content-item">
          <Image imageUrl={imageUrl}/>
          <Title />
          <Description />
        </div>
      </div>
    )
  }
}
