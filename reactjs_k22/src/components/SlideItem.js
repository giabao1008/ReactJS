import React, { Component } from 'react'

export default  class SlideItem extends Component {
    render() {
        
        return (
            <div id="slide-img"><img src={this.props.items[this.props.default]}/></div>
        )
    }
}
