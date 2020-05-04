import React from 'react';
import './App.css';
import queryString from 'query-string'
import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'


class Home extends React.Component{
  render(){
    return <> 
        <h1>Home </h1>
        <Link to="/about">About</Link>

    </>
  }
}

class About extends React.Component{
  render(){
    const params = this.props.match.params
    console.log(this.props)
    return (
      <>
        <h1>About {params.id}</h1>
      </>
    )
  }
}

class Contact extends React.Component{
  render(){
    const query  = queryString.parse(this.props.location.search)
    return <h1>Contact </h1>
  }
}

class c404 extends React.Component{
  render(){
    return (
      <h1> 404 </h1>
    )
  }
}
class App extends React.Component{
  render() {
    return (
        <BrowserRouter> 
          <h1> App </h1>
          <Switch>
            <Route path="/home" component={Home}  />
            {/* get from params */}
            {/* <Route path="/about/:id"  component={About}  /> */}
            <Route path="/about"  component={About}  />
            {/* get from queries */}
            <Route path="/contact" component={Contact}  />   
            <Route path="/404" exact component={c404} />
            <Route render={
              () => <Redirect to="/404" />
            } />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
