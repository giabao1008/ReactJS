import React, { Component } from 'react'
import Feature from './components/Feature'
// import Thumb from './components/Thumb'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      imageSrcs : [
        'images/img-1.jpg',
        'images/img-2.jpg',
        'images/img-3.jpg'
      ],
      featured : 0
    }

  }
  handleChange = (id) => {
    this.setState({
      featured: id
    })
  }

  render() {
    const images = this.state.imageSrcs
    return (
      <div id="products">
        <Feature images={images} 
                featured={this.state.featured} 
                handleChange={this.handleChange}
                alt=""

                />
        {/* <Thumb  images={images} 
                featured={this.state.featured} 
                handleChange={this.handleChange} /> */}
      </div>
    )
  }
}
