//import the react and ReactDom libralies

import React from 'react';
import ReactDOM from 'react-dom';

// create a react component

const App=()=>{
  const hi="hi"
  const func=(number)=>{

    return number*number

  }

  return (
  <div>
     <h1>{hi}</h1> 
     <p>{func(5)}</p>  
  </div>
  )
}

//Take the react component and show it on the screen

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)