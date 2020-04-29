import React from 'react';
import Header from './Layout/Header/Header.js';
import Home from './Pages/Home.js';
import Footer from './Layout/Footer/Footer.js';
import Course from './Pages/Course.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/course/:courseid" component={Course} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
