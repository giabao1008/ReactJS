import React, { Component } from 'react'
import {connect} from 'react-redux'

class Countdown extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            btnStatus: 0,
            currentTime: 10,
            // 0 - Start , 1 - Stop ,  2 -- reset
        }
        this.time = null
    }
    
    
    componentWillMount() {
        this.setState({
            currentTime: this.props.defaultTime
        })
    }
    componentDidMount(){
        
    }
    renderStart = () => {
        return <button id="start" type="button" className="btn btn-info" onClick={this.handleStart}>Start</button>
    }
    renderStop = () => {
        return <button id="stop" type="button" className="btn btn-danger" onClick={this.handleStop}>Stop</button>
    }
    renderReset = () => {
        return <button id="start" type="button" className="btn btn-info" onClick= {this.handleReset}>Reset</button>
    }
    
    handleStop = () => {
        clearInterval(this.time) 
        this.setState({
            btnStatus : 0
        })
    }
    handleReset = () => {
        this.setState({
            currentTime: 10,
            btnStatus: 0
        }, () => {
            clearInterval(this.time) 
            this.props.dsUpdateTime(10)
        })
    }
    handleStart = () => {
       
        this.time = setInterval(()=> {
            if(this.state.currentTime >0){
                this.setState({
                    currentTime: this.state.currentTime - 1
                }, () => {
                    this.props.dsUpdateTime(this.state.currentTime)
                })
                
            } 
            if(this.state.currentTime === 0){
                this.setState({
                    btnStatus: 2
                })
            }
        },1000)
        this.setState({
            btnStatus : 1
        })
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
                    <span>{this.state.currentTime}</span>
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