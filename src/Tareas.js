import React from 'react';

import ListaTareas from "./ListaTareas"
import NuevaTarea from "./NuevaTarea"

// const tareasFake = [
//     "dar clase",
//     "hacer break",
//     "regresar a casa",
// ]

class Tareas extends React.Component {


    state = {
        tareas: []
    }
    
    crear = (texto) => {

        const tareasAnteriores = this.state.tareas
    

        // mandar a Backend
        // esperear respuesta
        // si es valida, annadir nueva tarea a lista


        const tareas = [
            ...tareasAnteriores,
            {
                id: Math.random(),
                texto
            }
        ]


        this.setState({ tareas })
            
    }


    eliminar = (id) => {

        console.log("eliminar", id);

        const tareas = this.state.tareas.filter(
            tarea=>tarea.id !== id
        )

        this.setState({ tareas })
        
    }


    alternar = (id) => {

        const tareas = this.state.tareas
        const tarea = tareas.find( tarea => tarea.id === id )
        
        tarea.realizada = tarea.realizada ? false: true

        this.setState({tareas})
        
    }

    render() {
        return (
            <section>
                <NuevaTarea crear={(texto)=>this.crear(texto)}/>
                <ListaTareas
                    tareas={this.state.tareas}
                    eliminar={(id)=>this.eliminar(id)}
                    alternar={(id)=>this.alternar(id)}
                />
            </section>
        )
    }


}


export default Tareas;