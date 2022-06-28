import React from 'react';
import Signup from "./Components/Signup";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 align-items-center">
          <Signup />
        </div>
        <div className="col-md-3"></div>

      </div>
    </div>
  )
}

export default App
