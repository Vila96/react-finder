import React, { Component } from 'react'; 
import './App.css';
import Finder from './Finder/Finder'
import TaskList from './TaskList/TaskList'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        tasks: ["Clean bathroom", "Wash dishes", "Do the laundry", "Broom"],
    };
  }
    
  render(){
    return (
      <div className="App">
        <header className="App-header">

          <Finder />
          <TaskList dataFromApp = {this.state.tasks}/>
          
        </header>
      </div>
      
    );
  }
}

export default App;
