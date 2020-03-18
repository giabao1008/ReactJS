import React, { Component } from 'react'

export default class Titile extends Component {
    constructor(props){
        super(props)
        this.state = {
            titleEditEnabel: false,
            title: 'What is Lorem Ipsum?',
        }
      }
    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    enableChange = () =>{
        this.setState({
            titleEditEnabel: true
        })
    }
    doneEditable = () =>{
        this.setState({
            titleEditEnabel: false
        })
    }
      
    render() {
        return (
            <>
                { this.state.titleEditEnabel ?
                    <input onChange={this.handleChangeTitle} value={this.state.title} onBlur={this.doneEditable}/> 
                    :
                    <h4 onDoubleClick={this.enableChange}>{this.state.title}</h4>
                }
            </>
        )
    }
}
