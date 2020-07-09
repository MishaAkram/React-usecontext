import React, { useContext } from 'react';
import './App.css';
import ValueContext from './ValueContext';

function Child() {
  let value=useContext(ValueContext);
  return (
    <div className="App">
      Child value ={value}
     
    </div>
  );
}

export default Child;