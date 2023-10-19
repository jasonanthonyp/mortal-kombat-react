import React from 'react';
import { Outlet } from "react-router";
import Nav from './Nav'



function App() {
  return (
    <div>
        <Nav /> 
        <Outlet /> 
    </div>
  );
}

export default App;
