import React from 'react';

import Tarea from './Tarea';



class ListaTareas extends React.Component {


    render() {

        const tareasMostrar = (
            this.props.tareas.length > 0 ?
                this.props.tareas.map(
                    (tarea,indice)=>(
                        <Tarea
                        key={"tarea_"+indice}
                        {...tarea}
                        eliminar={ this.props.eliminar }
                        alternar={ this.props.alternar }
                        />
                    )
                ) : (
                    <p className="aviso">
                        No hay tareas
                    </p>
                )
        )
        
        return (
            <ul>
                { tareasMostrar }                
            </ul>
        )
    }


}


export default ListaTareas;