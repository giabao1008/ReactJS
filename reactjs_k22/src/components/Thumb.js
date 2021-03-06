import React, { Component } from 'react'

export default class Thumb extends Component {
    render() {
        const images = this.props.images
        const featured = this.props.featured

        return (
            <div id="small">
                {
                    images.map((img, index) => {
                        return  <img 
                                    className={index===featured ? 'active' : ''} 
                                    src={img} 
                                    key= {index}
                                    onClick = {() => this.props.handleChange(index)}
                                    alt=""
                                    />
                    })
                }
            </div>
        )
    }
}
