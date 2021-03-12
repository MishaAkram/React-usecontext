import React from 'react';
import Child from './Child';
import Child2 from './Child2';

function Parent(props) {
  
  return (
    <div >
      Parent
     <Child value={props.value}></Child>
     <Child2/>
    </div>
  );
}

export default Parent;