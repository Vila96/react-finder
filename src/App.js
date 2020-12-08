import React, { Component } from 'react'; 
import './App.css';
import Finder from './Finder/Finder'
import TaskList from './TaskList/TaskList'



class App extends Component {
  constructor(props){
    super(props)
    this.list = {
        tasks: ["Clean bathroom", "Wash dishes", "Do the laundry", "Broom"]
    };
    this.state = this.list
    
  }
    
  componentDidMount(){
  }

  callMeBack = (e) => {
    let regEx = new RegExp(`^${e.target.value}.*$`, "i");
    this.setState(this.list.filter(element => {return regEx(element.text)}));
  }

  deleteFromList = (id) => {
    console.log("Eliminar Tarea ", id);
    this.list = this.list.filter(el => {return el.id !== id});
    this.setState(this.list);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">

          <Finder callback = {this.callMeBack}/>
          <TaskList dataFromApp = {this.state.tasks} callback = {this.deleteFromList}/>
          
        </header>
      </div>
      
    );
  }
}

export default App;
