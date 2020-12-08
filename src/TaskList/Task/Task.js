import React, { Component } from 'react'; 
import './Task.css';

class Task extends Component {

   render() {
    return (
        <div>
             <li> {this.props.dataFromTaskList} </li>
             <input type="checkbox"></input>
             
             {console.log(this.props.dataFromTaskList)}

        </div>
    )
}
}


                //{/* {this.props.dataFromTaskList.map(el =><li>{el}<input type="checkbox"></input></li>)} */}



export default Task;


