import React, { Component } from 'react'
import {connect} from 'react-redux'

class Countdown extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            btnStatus: 0,
            currentTime: 10,
            // 0 - Start , 1 - Stop , 
        }
    }
    componentWillMount() {
        this.setState({
            currentTime: this.props.defaultTime
        })
    }
    renderStart = () => {
        return <button id="start" type="button" className="btn btn-info" onClick={this.handleStart}>Start</button>
    }
    renderStop = () => {
        return <button id="stop" type="button" className="btn btn-danger">Stop</button>
    }
    renderReset = () => {
        return <button id="start" type="button" className="btn btn-info">Start</button>
    }
    handleStart = () => {
        this.setState({
            btnStatus: 1
        })
        setInterval(()=> {
            if(this.state.currentTime >0){
                
            }
        },1000)
    }
    render() {
        let btn;
        if(this.state.btnStatus === 0) {
            btn =  this.renderStart()
        } else if(this.state.btnStatus === 1){
            btn = this.renderStop()
        } else {
            btn =  this.renderReset()
        }
        return (
            <div id="main">
                <div id="title">Automatic Timer</div>
                <div id="timer">
                    <span>10</span>
                </div>
                <div id="but">
                    {btn}
                </div>
            </div>
        )
    }
}

const mapStateToProp = (state) => ({
     defaultTime : state.defaultTime
})
const mapDispatchToProp = (dispatch) => ({
    dsUpdateTime : (time) => dispatch({
        type: "UPDATE_TIME",
        payload: time,
    })
 })

export default connect(mapStateToProp, mapDispatchToProp)(Countdown)