import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Header from './pages/Header'
import Slider from './pages/Slider'
import Footer from './pages/Footer'


import Category from './pages/Category/Index'
import Detail from './pages/Detail/Index'


import { Provider } from 'react-redux'
import store from './redux/store'


class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter> 
            <Header />
            <Slider />
            <Switch>
                  <Route path="/" component={Category} exact  />
                  <Route path="/detail/:id" component={Detail} exact  />
                  <Route render={ () => <Redirect to="/" /> } />
                
            </Switch>
            <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
  
}
export default App
