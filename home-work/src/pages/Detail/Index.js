import React, { Component } from 'react'

 class Index extends Component {
    render() {
        const params = this.props.match.params
        return (
            <div>
                {params.id}
            </div>
        )
    }
}
export default Index