import React, {useState} from 'react';
import {Login} from './Components/Login/Login';
import {TaskPlannerApp} from './Components/TaskPlanner/TaskPlannerApp';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { NewTask } from './Components/TaskPlanner/NewTask';
import {UsersGrid} from './Components/Users/UsersGrid';
import tasksList from './Components/TaskPlanner/data/tasksList';
import { UserProfile } from './Components/Register/UserProfile';

export const App = () => { 

  const [tasks,setTasks] = useState(tasksList);
  const addTask = (task) => {
    setTasks([...tasks,task]);
  } 
  return (
    
    <Router>
        <Switch>
          <Route exact path="/" component={() => <Login/>}/> 
          <Route exact path="/taskPlanner" component={ () =>(
            <TaskPlannerApp tasks={tasks}/>
          )}/>
          <Route exact path="/createTask" component={ () =>(
            <NewTask addTask={addTask}/> 
          )}/>
          <Route exact path="/register" component={ () =>(
            <UserProfile /> 
          )}/>
          <Route exact path="/users" component={() => (
            <UsersGrid/>
          )}/>
        </Switch>
    </Router>
  );
}

export default App;

