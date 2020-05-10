import React, { Component } from 'react';
import Item from './Components/Item'
import axios from 'axios'
import {connect} from 'react-redux'

import LoadMore from './Components/LoadMore'

class Index extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts : [],
            comments : [],
            visiable: 0
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( (rsPost) => {

                    axios.get('https://jsonplaceholder.typicode.com/comments')
                    .then(res => {
                        let comments = res.data
                        let commentCount = comments.reduce((obj,item)=> {
                            obj[item.postId] = obj[item.postId] + 1 || 1
                            return obj
                        },[])
                        let posts = rsPost.data.map((item)=> {
                            return item = {
                                ...item,
                                like_count: 0,
                                view_count: 0,
                                comment_count: commentCount[item.id],
                                isLike: false
                            }
                        })
                        this.setState({
                            posts,
                            comments,
                        }, ()=>{
                            this.props.fetchPosts(this.state.posts)
                            this.props.fetchComments(this.state.comments)
                        })
                    })
               
            })
            .catch(function (error) {
            // handle error
            console.log(error);
        })
        
        this.setState({
            visiable: this.props.visiable
        })
    }

    render() {
        const {posts,commentCount} = this.state
        const {visiable} = this.props
        // console.log(posts)
        return (
            <div className="blog-area section">
                <div className="container">
                    <div className="row">
                            {posts.slice(0, visiable).map((item, index) => { 
                                return <Item item={item} key={index} itemKey={index} 
                                cmtCount={commentCount}
                                 />
                            })}
                    </div>
                    <LoadMore />
                </div>
            </div>
        );
    }
}

const mapStateToProp = (state) => ({
    visiable : state.visiable
})
const mapDispatchToProp = (dispatch) => ({
    fetchPosts: (posts) => dispatch({
      type: "FETCH_POSTS",
      payload: posts,
    }),
    fetchComments: (comments) => dispatch({
        type: "FETCH_COMMENTS",
        payload: comments,
      })
})

export default connect(mapStateToProp,mapDispatchToProp)(Index) ;