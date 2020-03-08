import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Cart from './Components/Cart';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Header />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
              <Footer />
            </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
