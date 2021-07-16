import { useState } from "react";
import Bottom from "./Bottom"
import NewNotes from "./NewNotes";
import UpdateNotes from "./UpdateNotes";
import Note from "./Note";
import Top from "./Top"


const App=()=>{
  const[notes,setNotes]=useState([]);


  const[pos,setPos]=useState();

  const[isEdit,setIsEdit]=useState(false);


  const update=(id)=>{
    setPos(id);
    setIsEdit(true);
  }


  const insert=(bundle)=>{
    setNotes((old)=>{
      return [...old,bundle]
    });
    alert("Notes are added into your account "+notes.length);
  }

  const change=(pack)=>{
    const index=pack[1];
    const obj=pack[0];
    notes[index].title=obj.title;// update
    notes[index].content=obj.content;// Update
    alert("Update done");
    setIsEdit(false);
  }

  const remove=(id)=>{
    setNotes((old)=>{
      return old.filter((elem,ind)=>{
        return ind!==id
      })
    })
    alert("Deletion done");
  }

  return(
    <>
      <Top/>
      {isEdit?<UpdateNotes onUpdate={change} obj={notes[pos]} id={pos}/>:<NewNotes onAdd={insert}/>}

      <div className="row">
      <h1>{notes.length}</h1>
        { 
          notes.map((object,position)=>{
          return (<Note key={position} id={position} data={object} onEdit={update} onDelete={remove}/>)
        })}
      </div>

      <Bottom/>
    </>
  );
}

export default App;
