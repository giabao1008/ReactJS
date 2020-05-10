import React, { Component } from 'react'
import {connect} from 'react-redux'



class LoadMore extends Component {

    render() {
        const visiable = this.props.visiable
        return (
            <a className="load-more-btn" href="/" 
                onClick={(e) => {
                    e.preventDefault()
                    this.props.loadMore(visiable + 9)
                }}
            >
                <b>LOAD MORE</b>
            </a>
        )
    }
}



const mapStateToProp = (state) => ({
    visiable : state.visiable
})

const mapDispatchToProp = (dispatch) => ({
    loadMore: (number) => dispatch({
      type: "SET_VISIBLE_ITEMS",
      payload: number,
    })
})

export default connect(mapStateToProp, mapDispatchToProp)(LoadMore) ;