import React from 'react';
import Child from './Child';

function Parent(props) {
  
  return (
    <div >
      Parent
     <Child value={props.value}></Child>
    </div>
  );
}

export default Parent;