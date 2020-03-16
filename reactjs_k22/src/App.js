import React, { Component } from 'react'
// import SlideItem from './components/SlideItem'
import Buttons from './components/Buttons'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state= {
      // items : [
      //   'images/banner-1.jpg',
      //   'images/banner-2.jpg',
      //   'images/banner-3.jpg'
      // ],
      // default: 0,
      urlDefault: 'images/banner-1.jpg',
    }
  }

  handleChange = (url) => {
    return this.setState({ 
      urlDefault: url,
    })
      
  }
  changUrl1 = () => {
    this.setState({
      urlDefault: 'images/banner-2.jpg',
    })
  }
  changUrl2 = () => {
    this.setState({
      urlDefault: 'images/banner-2.jpg',
    })
  }
  changUrl3 = () => {
    this.setState({
      urlDefault: 'images/banner-3.jpg',
    })
  }
  render() {
    return (
      <div id="slide">
          <div id="slide-img"><img src={this.state.urlDefault}/></div>
          <Buttons
           //doChange={this.handleChange} 
           changUrl1={this.changUrl1}
           changUrl2={this.changUrl2}
           changUrl3={this.changUrl3}
           
           />
      </div>
    )
  }
}
