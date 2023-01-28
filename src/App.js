
import Comp1 from './components/Comp1';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import './components/style.css';

function App() {

  const [task, setTask] = useState([
    {id:uuidv4(), nom:'sport', complete:false},
    {id:uuidv4(), nom:'sport', complete:false},
    {id:uuidv4(), nom:'sport', complete:false}
  ]);

  const [tache, setTache] = useState('');

  const addTache = () =>{ 
    
    if (tache.length === 0){
      alert('stop');
    }else{
      let nTask = [...task];
      let nTache = {};
      nTache.id = uuidv4();
      nTache.nom = tache;
      nTache.complete=false;
      nTask.push(nTache);
      setTask(nTask);
      setTache('');
    }
  }

  const delTask = (idp) =>{
    let nt = task.filter((t)=>{
      return t.id !== idp;
    });
    setTask(nt);
  }

  const modif = (id)=>{
    let nt = task.map((tt)=>{
      if(tt.id === id){
        tt.complete = !tt.complete;
      }
      return tt;
    })
    setTask(nt);
  }


  return (
    <div className="container">
      <h1>To Do List</h1>
      <form>
        <p>add tasks:</p>
        <input type="text" className='inp' value={tache} onChange={(e)=>setTache(e.target.value)} placeholder="Write your new task here"/>
        <br />
        <input type="button" className='add' onClick={addTache} value="Add" />
        
      </form>
      <br />
      <ul>
      {
        task.map((t)=>{
          return <li className={t.complete ? "comple" : ""} key={t.id}><Comp1 modif={modif} txt={t.nom} delf={()=>delTask(t.id)}  id={t.id}/></li>
        })
      }
      </ul>
      
    </div>
  );
}

export default App;
