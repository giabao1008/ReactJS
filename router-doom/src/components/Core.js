import React, { Component } from 'react'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import queryString from 'query-string'
import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Detail from './Detail'


export default class Core extends Component {
    render() {
        return (
            <BrowserRouter> 
                <Header />
                <Switch>
                    <Route path="/" exact component={Home}  />
                    <Route path="/about" exact  component={About}  />
                    <Route path="/contact" exact component={Contact}  />   
                    <Route path="/details/:id" component={Detail} />
                    <Route render={ () => <Redirect to="/" />  } />
                </Switch>
                <Footer />
            </BrowserRouter>


                

              
        )
    }
}
