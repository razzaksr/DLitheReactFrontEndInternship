import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
    const[mycolor,setMyColor]=useState('blue');

    const action=()=>{
        setMyColor('red');
    }

    const doub=()=>{
        setMyColor('green');
    }

    return(
        <>
            <p style={{backgroundColor:mycolor,color:'white'}} >React and bootstrap get combined here</p>
            <button className="btn btn-outline-dark" onClick={action} onDoubleClick={doub}>Click Me!</button>
        </>
    );
}

export default App;