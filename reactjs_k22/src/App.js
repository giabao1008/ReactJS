import React, { Component } from 'react'
import SlideItem from './components/SlideItem'
import Buttons from './components/Buttons'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state= {
      items : [
        'images/banner-1.jpg',
        'images/banner-2.jpg',
        'images/banner-3.jpg'
      ],
      default: 0,
    
    }
  }

  handleChange = (item) => {
    this.setState({ 
        default: item,
    })
      
  }

  render() {
    return (
      <div id="slide">
          <SlideItem default={this.state.default} items={this.state.items} />
          <Buttons doChange={this.handleChange} />
      </div>
    )
  }
}
