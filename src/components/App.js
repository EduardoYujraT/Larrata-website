import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Layout/NavigationBar';
import Reglamento from '../components/Reglamento'
import Miembros from '../components/Miembros';
function App() {
  return (
  <React.Fragment>
    <NavigationBar></NavigationBar>
    <Reglamento></Reglamento>
    <Miembros></Miembros>
  </React.Fragment>

    
  );
}

export default App;
