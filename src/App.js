import React from 'react';
import FormManagement from './components/FormManagement'
import FormBuilder from './components/FormBuilder'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './style.css'

function Index() {
  return <h2>Dynamic Form</h2>;
}

function About() {
  return <h2>Sample Dynamic Form App v1.1</h2>;
}

function App() {
  return (
    <Router >
      <div >
        <nav className="caja">
          <div>
            <Link to="/">Home</Link>
          </div>

          <div>
            <Link to="/about">About</Link>
          </div>

          <div>
            <Link to="/formManagement/">Sample Form</Link>
          </div>

          <div>
            <Link to="/formBuilder/">Form Builder</Link>
          </div>


        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/formManagement/" component={FormManagement} />
        <Route path="/formBuilder/" component={FormBuilder} />
      </div>
    </Router>
  );
}


export default App;
