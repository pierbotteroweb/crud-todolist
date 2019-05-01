import React from 'react';

class ListaPorStatus extends React.Component{
    constructor(props){
        super();
    }

render(){
    return(
    <div className="tabs">
        <div className="tab">
        <input type="radio" id="tab-1" name="tab-group-1" value="todos" 
                    checked={this.props.status==="todos"}
                    onChange={this.props.mostraCompImp} /> <label for="tab-1">  Todos</label>
        </div>
        <div className="tab">
        <input type="radio" id="tab-2" name="tab-group-1" value="completos" 
                    checked={this.props.status==="completos"}
                    onChange={this.props.mostraCompImp} /> <label for="tab-2">  Completos</label>
        </div>
        <div className="tab">
        <input type="radio" id="tab-3" name="tab-group-1" value="incompletos"  
                    checked={this.props.status==="incompletos"}
                    onChange={this.props.mostraCompImp} /> <label for="tab-3">  Incompletos</label>
        </div>
    </div>)
    }
}


export default ListaPorStatus;