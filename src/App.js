import React from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext'
function App() {
  let value =45;
  
  return (
    <ValueContext.Provider value={value}>

    <div className="App">
     <Parent value={value}>
       
     </Parent>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
