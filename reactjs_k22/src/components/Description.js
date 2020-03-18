import React, { Component } from 'react'

export default class Description extends Component {
    constructor(props){
        super(props)
        this.state = {
            desEditEnable: false,
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      }
    handleChangeDes = (e) => {
        this.setState({
            des: e.target.value
        })
    }
    enableChange = () =>{
        this.setState({
            desEditEnable: true
        })
    }
    doneEditable = () =>{
        this.setState({
            desEditEnable: false
        })
    }
    render() {
        return (
            <>
            { this.state.desEditEnable ? 
                <textarea   onChange={this.handleChangeDes} 
                            onBlur={this.doneEditable} 
                            value={this.state.des} /> 
                :
                <p onDoubleClick={this.enableChange}>   {this.state.des}  </p>
            }
            </>

           
        )
    }
}
