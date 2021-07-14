
//import akash from 'react';
//import kavya from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import react from 'react';
import reactDom from 'react-dom';
import App from './App';
import {styleProp,msg,process} from './Salem';
import Info from './Info';


/*
React-DOM.render(JSX,where to show);
*/

//const[varNAme,function]=useState(initialization)
/* let mycolor='blue';


const action=()=>{
  mycolor='red';
  alert("Button has Clicked");
}

kavya.render(
  <>
    <h1 contentEditable="true">DLithe Front end Internship</h1>
    <p style={{backgroundColor:mycolor,color:'white'}} >React and bootstrap get combined here</p>
    <button className="btn btn-outline-dark" onClick={action}>Click Me!</button>
  </>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reactDom.render(
  <>
    {/* <App/> */}
    <h1 style={styleProp}>
      {msg}
    </h1>
    <button className="btn btn-outline-secondary" onClick={process}>
      Change
    </button>
    <Info num1={12} num2={13}/>
    <Info num1={98} num2={123}/>
    <Info num1={93} num2={48}/>
    <Info num1={45} num2={78}/>
  </>,document.getElementById('root')
);