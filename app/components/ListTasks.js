import React from 'react';

class ListTasks extends React.Component{
    constructor(props){
        super(props)

    }

    render(){

        const checkboxStyle={
            display:'inline-block',
            background: 'lightblue',
            padding:'10px',
            fontFamily:'Arial'
        }

        const checkboxCompleteStyle={
            display:'inline-block',            
            background: 'lightgreen',
            padding:'10px',
            fontFamily:'Arial'
        }

        var tarefaConcluida = this.props.tarefas.concluida;

        return (
            <div>
                <input 
                        onChange={this.props.concluiTarefa} 
                        value={this.props.id} 
                        checked={tarefaConcluida} 
                        type="checkbox"/>
                <p style={tarefaConcluida?
                        checkboxCompleteStyle:checkboxStyle}  >{this.props.tarefas.tarefa}</p>
            </div>
        )
    }
}

export default ListTasks