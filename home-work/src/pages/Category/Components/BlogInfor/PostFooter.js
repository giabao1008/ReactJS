import React, { Component } from 'react'
import {connect} from 'react-redux'


class PostFooter extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLike : false,
            
        }
    }
    handleLike (item, key) {
        this.setState({
            isLike: !this.state.isLike
        }, () => {
            this.props.updateLike(
                this.props.itemKey,
                {
                    ...this.props.item,
                    like_count: this.state.isLike ? this.props.item.like_count + 1 : this.props.item.like_count -1
                }
            )
        })
    }
    render() {
        const item = this.props.item
        const {isLike} = this.state
        // console.log(item)
        return (
            <ul className="post-footer">
                <li>
                    <a href="#" className={isLike ? 'active' : ''} onClick={(e)=>{
                        e.preventDefault()
                        this.handleLike()
                    } }>
                    <i className="ion-heart"></i>{item.like_count}</a>
                </li>
                <li><a href="#"><i className="ion-chatbubble"></i>{item.comment_count}</a></li>
                <li><a href="#"><i className="ion-eye"></i>{item.view_count}</a></li>
            </ul>
        )
    }
}

const mapStateToProp = (state) => ({
    // visiable : state.visiable
})

const mapDispatchToProp = (dispatch) => ({
    updateLike: (key,obj) => dispatch({
      type: "UPDATE_POST",
      payload: {key, obj},
    })
})
export default connect(mapStateToProp, mapDispatchToProp)(PostFooter)