import React, { Component } from 'react'

export default class Buttons extends Component {

    changUrl1 = () =>{
        this.props.changUrl1()
    }
    changUrl2 = () =>{
        this.props.changUrl2()
    }
    changUrl2 = () =>{
        this.props.changUrl3()
    }

    render() {
        return (
            <p id="slide-num">
                <a  onClick={this.changUrl1}>1</a> 
                <a  onClick={this.changUrl2}>2</a>
                <a  onClick={this.changUrl3}>3</a>
            </p>
        )
    }
}
