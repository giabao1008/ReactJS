import React, { Component } from 'react'
import {connect} from 'react-redux'

class Title extends Component {
    constructor(props){
        super(props)
        this.state = {
            titleEditEnabel: false,
            //titleDefault: 'What is Lorem Ipsum?',
            title: 'Loading....',
        }
      }
    // handleChangeTitle = (e) => {
    //     this.setState({
    //         title: e.target.value,
    //     })
    // }
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
            title: this.props.titleDefault
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
                title: this.props.titleDefault
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
                        onBlur={(e) => {this.props.doneEditable(e.target.value); this.doneEditable} }
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

const mapStateToProp = (state) => ({
        titleDefault : state.title
})

const mapDispatchToProp = (dispatch) => ({
    doneEditable: (string) => dispatch({
        type: "UPDATE_TITLE",
        payload: string,
    })
})

export default connect(mapStateToProp, mapDispatchToProp)(Title)