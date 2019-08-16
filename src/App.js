import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import Reglamento from './components/Pages/Reglamento';
import Miembros from './components/Pages/Miembros';
import Issues from './components/Pages/Issues';
import NotFound from './components/Pages/notFound';







function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
          <Route exact path="/" component={Reglamento} />
          <Route path="/miembros" component={Miembros} />
          <Route path="/issues" component={Issues} />
          <Route component={NotFound} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
