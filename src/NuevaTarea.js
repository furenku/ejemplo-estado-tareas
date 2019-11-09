import React from 'react';


class NuevaTarea extends React.Component {

    inputTexto = React.createRef()


    enviar = (event)=>{

        const campoTexto = this.inputTexto.current;
        const texto = campoTexto.value;
        
        this.props.crear( texto );
        
        campoTexto.value = ""

        event.preventDefault();

    }


    render() {


        return (
            <form action="">

                <input
                ref={this.inputTexto}
                type="text"/>

                <input type="submit"
                onClick={ e => this.enviar(e) }
                />
                
            </form>
        )
    }


}


export default NuevaTarea;