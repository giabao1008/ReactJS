import React, { Component } from 'react';
import Item from './Components/Item'

class Index extends Component {
    render() {
        return (
            <div class="blog-area section">
                <div class="container">
                    <div class="row">
                        <Item />
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;