import React, { Component } from 'react';
// import Title from './BlogInfor/Title'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Item extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            isLike: false,
            like_count: 0
        }
    }
    handleLike () {
        this.setState({
            isLike: !this.state.isLike,
            like_count: !this.state.isLike ? this.state.like_count + 1 : this.state.like_count -1,
        }, () => {
            this.props.updateLike(
                this.props.itemKey,
                {
                    ...this.props.item,
                    like_count: this.state.like_count,
                    isLike: this.state.isLike
                }
            )
        })
    }
    handleView(e){
        e.preventDefault()
    }
    componentDidMount(){
        this.setState({
            isLike: this.props.item.isLike,
            like_count: this.props.item.like_count
        })
    }
    render() {
        const {item}  = this.props
        const {isLike,like_count} = this.state
        // console.log(isLike,like_count)
        return (
            <div className="col-lg-4 col-md-6">
                <div className="card h-100">
                    <div className="single-post post-style-1"> 
                        <div className="blog-image">
                            <img src="images/alex-lambley-205711.jpg" alt="Blog "/>
                        </div>
                        <a href="/" className="avatar" >
                            <img src="images/icons8-team-355979.jpg" alt="Profile "/>
                        </a>
                        <div className="blog-info">
                            <h4 className="title">
                                <Link to={`/detail/${item.id}`} >
                                    <b>{item.title}</b>
                                </Link>
                            </h4>
                            <ul className="post-footer">
                                <li>
                                    <a href="/" className={isLike ? 'active' : ''} onClick={(e)=>{
                                        e.preventDefault()
                                        this.handleLike()
                                    } }>
                                    <i className="ion-heart"></i>{like_count}</a>
                                </li>
                                <li><a href="/"><i className="ion-chatbubble"></i>{item.comment_count}</a></li>
                                <li><a href="/"><i className="ion-eye"></i>{item.view_count}</a></li>
                            </ul>
						</div>
                    </div>
                </div>
            </div>
        );
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

export default connect(mapStateToProp, mapDispatchToProp)(Item);