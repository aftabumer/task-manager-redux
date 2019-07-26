import React, { Component } from "react";
import Tasks from "./Tasks";
import Task from "./Task";
import {taskAction} from '../store/actions/taskAction'
// import {addTask} from "../store/actions/taskAction"
import {connect} from "react-redux"

class TaskManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      dueDate: "",
      // tasks: [
      //   {
      //     title: "Time Table",
      //     description: "FYP",
      //     dueDate: "31/08/2019"
      //   }
      // ],
      e_title: "",
      e_description: "",
      e_dueDate: ""
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

addTask = () =>{
  let {title, description, dueDate} = this.state;
  this.props.addTask({ title,description,dueDate, })

  this.setState({
    title: '',
    description: '',
    dueDate: '',
  })
}

deleteTask = (index) => {
  this.props.deleteTask(index)
}


  // addTask = e => {
  //   e.preventDefault();
  //   let tasks = this.state.tasks;
  //   let title = this.state.title;
  //   let description = this.state.description;
  //   let dueDate = this.state.dueDate;

  //   let newTasks = {
  //     title,
  //     description,
  //     dueDate,
  //     editStatus: false
  //   };
  //   tasks.push(newTasks);
  //   this.setState({
  //     title: "",
  //     description: "",
  //     dueDate: ""
  //   });
  // };

  // handleOnDelete = index => {
  //   let task = this.state.tasks;
  //   task.splice(index, 1);
  //   this.setState({
  //     tasks: task
  //   });
  // };

  handleOnEdit = index => {
    let tasks = this.state.tasks.map((task, i) =>
      i === index ? { ...task, editStatus: true } : task
    );

    this.setState({ tasks });
  };

  handleOnSave = index => {
    let tasks = this.state.tasks.map((task, i) =>
      i === index
        ? {
            ...task,
            editStatus: false,
            title: this.state.e_title,
            description: this.state.e_description,
            dueDate: this.state.e_dueDate
          }
        : task
    );
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
          
        <Tasks {...this.state} add = {this.addTask} click = {this.handleOnClick} change = {this.handleOnChange}/>
        {this.props.tasks && this.props.tasks.map((task, index) => {
          return (
            <>
             <Task {...this.state} task={task} index={index} change = {this.handleOnChange} click = {this.handleOnClick} edit = {this.handleOnEdit} save ={this.handleOnSave} delete = {this.deleteTask}/>
            </>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps =(state) => {
  console.log("state: ", state.tasks);
  
  return{
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (payload) => dispatch(taskAction.addTask(payload)),
    deleteTask: (payload) => dispatch(taskAction.deleteTask(payload))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(TaskManager)
