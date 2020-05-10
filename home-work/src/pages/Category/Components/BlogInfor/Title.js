import React, { Component } from 'react'

export default class Title extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const title = this.props.title
        return (
            <h4 className="title">
                <a href="#">
                    <b>{title}</b>
                </a>
            </h4>
        )
    }
}
