import React, { Component } from 'react'; 
import './TaskList.css';
import Task from './Task/Task'



class TaskList extends Component {

    render() {
        return (
            <div>    
            <h1>Task list</h1>
            <ul>
            {this.props.dataFromApp.map(el => <Task dataFromTaskList={el} />)}
            </ul>
            </div>

        ) 
    }
}



                //{/* Data from App */}
                //{this.props.dataFromApp}
                //{console.log(this.props.dataFromApp)}


               // {/* Call from Child-to-Parent */}
               // <Task parentCallback = {this.callbackFunction}/>


                //{/* Call from Parent-to-Child */}
                //<Task dataFromTaskList = {this.state.tasks}/>

export default TaskList;
