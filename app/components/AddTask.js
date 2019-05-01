import React from 'react';

class AddTask extends React.Component{
    constructor(props){
        super();
        this.state={
           enviou:false
        }

        this.insereTarefa = this.insereTarefa.bind(this)
    }

    insereTarefa(evento){
        evento.preventDefault();
        let textoInserido = evento.target.getElementsByTagName('input')[0],

        texto = textoInserido.value;
        if(texto!==""){
        this.props.metodoAdiciona(texto);
        }


    }

    render(){

        return(
            <div className="blocoEnviaTarefa">
             <form onSubmit={this.insereTarefa}>
                  <button>+</button>
                  <input/>
             </form>
            </div>)
    }
}

export default AddTask;