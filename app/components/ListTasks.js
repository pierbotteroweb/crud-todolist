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
            <div>
                <input 
                        onChange={this.props.concluiTarefa} 
                        value={this.props.id}
                        id={"tarefa"+this.props.id}
                        checked={tarefaConcluida} 
                        type="checkbox"/>
                <label style={tarefaConcluida?
                        checkboxCompleteStyle:checkboxStyle}  
                        for={"tarefa"+this.props.id}>{this.props.tarefas.tarefa}</label>
            </div>
        )
    }
}

export default ListTasks