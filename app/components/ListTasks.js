import React from 'react';

class ListTasks extends React.Component{
    constructor(props){
        super(props)

    }

    render(){

        const checkboxStyle={
            background: 'lightblue',
        }

        const checkboxCompleteStyle={        
            background: 'lightgreen'
        }

        var tarefaConcluida = this.props.tarefas.concluida;

        return (
            <div className="taskWrap">
                <input 
                        onChange={this.props.concluiTarefa} 
                        value={this.props.id}
                        id={"tarefa"+this.props.id}
                        checked={tarefaConcluida} 
                        type="checkbox"/>
                <label className="inputTask" style={tarefaConcluida?
                        checkboxCompleteStyle:checkboxStyle}  
                        for={"tarefa"+this.props.id}
                        >{this.props.tarefas.tarefa}</label>
                <button className="delButton" >X</button>
            </div>
        )
    }
}

export default ListTasks