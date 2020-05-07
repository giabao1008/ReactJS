import React, { Component } from 'react';
import Image from './Image'
import Avatar from './Avatar'


class Item extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6">
                <div className="card h-100">
                    <div className="single-post post-style-1"> 
                        <Image />
                        <Avatar />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;