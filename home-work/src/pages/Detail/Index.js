import React, { Component } from 'react'
import Content from './Components/Content'
import Comment from './Components/Comment'

import axios from 'axios'
 class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            post: {},
            comments: []
        }
    }
    componentWillMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/', {
            params: {
              id: this.props.match.params.id
            }
          })
          .then(resPost => {

            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}/comments`)
            .then(res => {
                this.setState({
                    post: resPost.data[0],
                    comments: res.data
                })
            })
            //   console.log(res)
              
          })
        
    }
    render() {
        const params = this.props.match.params
        return (
          <div className="post-area section"> 
            <div className="container">
                <div className="row"> 
                    <Content post={this.state.post}/>
                    
                    <Comment comments={this.state.comments}/>
                </div>
              
            </div>
          </div>
        )
    }
}
export default Index