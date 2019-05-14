import React from 'react';
import AddTask from './AddTask';
import ListTasks from './ListTasks';
import ListaPorStatus from './ListaPorStatus';

  class TodoListMain extends React.Component {
    constructor() {
      super();
      this.state={
        tarefas:[],
        mostraPorTipo:"todos"
      }

      this.adicionaTarefa = this.adicionaTarefa.bind(this);
      this.concluiTarefa = this.concluiTarefa.bind(this);
      this.mostraCompletosIncompletos = this.mostraCompletosIncompletos.bind(this);

    }

    componentDidMount(){
      let self = this;
      fetch('http://localhost:4400/tarefas')
      .then(response=>response.json())
      .then(function(response){
        console.log(response.data);
        self.setState({
          tarefas:response.data
        })
      })
    }

    adicionaTarefa(tarefaX){
        let self = this;
        self.setState(prevState=>{
          let novaTarefa={tarefa:tarefaX,concluida:false};
          return{
            tarefas:prevState.tarefas.concat(novaTarefa)
          }
        })
    }

    mostraCompletosIncompletos(evento){
      let self = this;
      self.setState({
        mostraPorTipo:evento.target.value
      })

    }

    concluiTarefa(evento){
      let self = this;
      let indiceTarefa = evento.target.value;

      self.setState(function(prevState){
        var listaAtualizada = prevState.tarefas;
        var novoStatusChecado = !prevState.tarefas[indiceTarefa].concluida;
        listaAtualizada[indiceTarefa].concluida=novoStatusChecado;
        return{
          tarefas:listaAtualizada
        }
      })
    }
    
    render() {

        return (
          <div className="mainWrap" >
            <p>LISTA DE TAREFAS REACT</p>
            <ListaPorStatus status={this.state.mostraPorTipo}
                mostraCompImp={this.mostraCompletosIncompletos} />
            {
                 (this.state.mostraPorTipo==="completos")?
                 this.state.tarefas.map((item,indice) =>
                 (item.concluida)&&
                 <ListTasks tarefas={item} id={indice}
                 concluiTarefa={this.concluiTarefa} />)

                 :(this.state.mostraPorTipo==="incompletos")?
                 this.state.tarefas.map((item,indice) => 
                 (!item.concluida)&&
                 <ListTasks tarefas={item} id={indice}
                 concluiTarefa={this.concluiTarefa} />)

                 :this.state.tarefas.map((item,indice) =>                
                 <ListTasks tarefas={item} id={indice}
                 concluiTarefa={this.concluiTarefa} />)
              }
            <AddTask metodoAdiciona={this.adicionaTarefa}/>
          </div>
        )
    }
  }
  
export default TodoListMain;
