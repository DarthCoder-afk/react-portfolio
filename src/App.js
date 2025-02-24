import logo from './logo.svg';
import './App.css';
import {NavBar} from './component/NavBar.js';
import {Banner} from './component/Banner.js';
import {Skills} from './component/Skills.js';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  );
}

export default App;
