import React from 'react';
import './style.css';


export default function Comp1({txt, delf, modif, id}) {
  return (
    <div>
      <input type="text" value={txt} readOnly  className='inp'  />
      <input type="button" onClick={delf} value="Delete" className='delete'/>
      <input type="button" value="Modify" onClick={()=>modif(id)} className='modify' />
    </div>
  )
}
