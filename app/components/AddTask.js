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

        this.props.metodoAdiciona(texto);


    }

    render(){

        const fundoCinza={
          background:'lightgrey',
          padding:'10px',
          fontFamily:'Arial',
          maxWidth:'350px'
        }

        return(
            <div style={fundoCinza} >
             <p>Insira aqui sua tarefa</p>
             <form onSubmit={this.insereTarefa}>
                  <input/>
                  <button >Submit</button>
             </form>
            </div>)
    }
}

export default AddTask;