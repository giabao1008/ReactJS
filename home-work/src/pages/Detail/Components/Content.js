import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props){
        super(props)

    }
    render() {
        // console.log(this.props.post)
        const post = this.props.post
        return (
            <div className="blog-post-inner">

                <div className="post-info">

                    <div className="left-area">
                        <a className="avatar" href="#"><img src="/images/avatar-1-120x120.jpg" alt="Profile Image"/></a>
                    </div>

                    <div className="middle-area">
                        <a className="name" href="#"><b>Katy Liu</b></a>
                        <h6 className="date">on Sep 29, 2017 at 9:48 am</h6>
                    </div>

                </div>

                <h3 className="title"><a href="#"><b>{post.title}</b></a></h3>

                <p className="para">{post.body}</p>

                <ul className="tags">
                    <li><a href="#">Mnual</a></li>
                    <li><a href="#">Liberty</a></li>
                    <li><a href="#">Recommendation</a></li>
                    <li><a href="#">Inspiration</a></li>
                </ul>
            </div>
        )
    }
}
