import React from 'react';


const Tarea = ({
    id,
    texto,
    realizada,
    eliminar,
    alternar
}) => (
    <li>
        <input type="checkbox" onChange={(e)=>alternar(id)}/>
        <span style={ realizada ? { textDecoration: "line-through" } : {} }>
            { texto }
        </span>
        <button onClick={()=>eliminar(id)}>
            Eliminar
        </button>
        
    </li>
)


export default Tarea;