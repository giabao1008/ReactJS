import React, { Component } from 'react'

export default class Comment extends Component {
    constructor(props){
        super(props)

    }
    render() {
        const comments = this.props.comments
        console.log(comments)
        return (
            <div className="commnets-area">
                {  
                    comments.map( cmt => { 
                        return (
                            <div className="comment" key="{cmt.id}">

                                <div className="post-info">

                                    <div className="left-area">
                                        <a className="avatar" href="#"><img src="/images/avatar-1-120x120.jpg" alt="Profile Image"/></a>
                                    </div>

                                    <div className="middle-area">
                                            <a className="name" href="#"><b>User: {cmt.name}</b></a>
                                        <h6 className="date">
                                            Email: {cmt.email}
                                        </h6>
                                    </div>
                                </div>

                                <p>{cmt.body}</p>

                            </div>
                        )
                        
                    }) 
                }
                

			</div>
        )
    }
}
