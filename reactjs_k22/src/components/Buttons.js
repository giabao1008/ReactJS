import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <p id="slide-num">
                <a  onClick={() => this.props.doChange(0)}>1</a> 
                <a  onClick={() => this.props.doChange(1)}>2</a>
                <a  onClick={() => this.props.doChange(2)}>3</a>
            </p>
        )
    }
}
