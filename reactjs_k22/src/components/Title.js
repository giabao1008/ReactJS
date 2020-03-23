import React, { Component } from 'react'

export default class Titile extends Component {
    constructor(props){
        super(props)
        this.state = {
            titleEditEnabel: false,
            titleDefault: 'What is Lorem Ipsum?',
            title: 'Loading....',
        }
      }
    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value,
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
    componentDidMount(){
       setTimeout(() => {
        this.setState({
            title: this.state.titleDefault
        })
       },2000)
    }
    componentDidUpdate(){
        if(this.state.titleEditEnabel){
        //   this.textInput.focus()
            document.getElementById('intTitle').focus()
        }
    }
    shouldComponentUpdate(){
        if(this.state.title === ''){
            this.setState({
                title: this.state.titleDefault
            })
        }
        return true
    }
    renderTitle(){
        return <h4 onDoubleClick={this.enableChange}>{this.state.title}</h4>    
    }
    rentderInpTitle(){
        return <input onChange={this.handleChangeTitle} 
        id="intTitle"
        value={this.state.title} 
        onBlur={this.doneEditable} 
        ref={elem => (this.textInput = elem) } 
        /> 
    }
    render() {
        return (
            <>
                { this.state.titleEditEnabel ? this.rentderInpTitle() : this.renderTitle() }
            </>
        )
    }
}
