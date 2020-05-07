import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Category from './pages/Category/Index'
import Header from './pages/Header'
import Slider from './pages/Slider'
import Footer from './pages/Footer'

function App() {
  return (
    <BrowserRouter> 
        <Header />
        <Slider />
        <Switch>
          
              <Route path="/" component={Category} exact  />
              {/* <Route render={ () => <Redirect to="/" /> } /> */}
            
        </Switch>
        <Footer />
    </BrowserRouter>
    
  );
}

export default App;
