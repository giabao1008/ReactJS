import React, { Component } from 'react'

export default class PropsFunc extends Component {
    constructor (props){
        super(props)
        this.state = {
            name: ''
        }
    }
    changeName = () => {
      return  this.setState({
            name: 'Hung'
        })
    }
    render() {
        return (
            <div>
                Hello {this.state.name || 'Tuyen'}
                <Child changeName={this.changeName}  />
            </div>
        )
    }
}

export class Child extends Component {

    render(){
        return(
            <div>
                <a onClick={this.props.changeName}> Change Name</a>
            </div>
        )
    }
}
