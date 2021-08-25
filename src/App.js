import React, { useState, useEffect } from "react"
import { Route, Link, Switch } from "react-router-dom";
import Nav from './components/Nav'

import './App.css';

import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TaskList from "./pages/TaskList";
import OneTask from "./pages/OneTask";
import AddEdit from "./pages/AddEdit";
import Logout from "./pages/Logout";

import ProgBar from "./components/ProgBar"

import { prioritySort } from "./functions/prioritySort";

const App = () => {

const url = "https://adulting-backend.herokuapp.com";
const [ tasks, setTasks ] = useState([]);
const [ authZ, setAuthZ ] = useState({username: null, token: null})

// const emptyTask = {
//   username: "",
//   name: "",
//   frequency: "",
//   countdown: "",
//   tags: "",
//   checklist: ""
// };

// const [selectedTask, setSelectedTask] = React.useState(emptyTask);

// GET
const getTasks = async () => {
  const response = await fetch(url + "/tasks", {
    headers: {
      "authorization": `bearer ${authZ.token}`
    }
  })
  const data = await response.json()
  setTasks(prioritySort(data));
};

useEffect(async () => {
  if (authZ.token){
    await getTasks()
  }
}, [authZ]);

const getOneTask = async (input) => {
  const response = await fetch(url + "/tasks/" + input, {
    headers: {
      "authorization": `bearer ${authZ.token}`
    }
  })
  const data = await response.json()
  return data
};

// CREATE
const handleCreate = (newTask) => {
  fetch(url + "/tasks", {
    method: "post",
    headers: {
      "authorization": `bearer ${authZ.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask),
  }).then(() => {
    getTasks();
  });
};

// UPDATE
const handleUpdate = (input) => {
  fetch(url + "/tasks/" + input._id, {
    method: "put",
    headers: {
      "authorization": `bearer ${authZ.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(input),
  }).then(() => {
    getTasks();
  });
};

// const selectTask = (input) => {
//   setSelectedTask(input);
// };

// DELETE
const handleDelete = (input) => {
  fetch(url + "/tasks/" + input._id, {
    method: "delete",
    headers: {
      "authorization": `bearer ${authZ.token}`,
      "Content-Type": "application/json"
    },
  }).then(() => {
    getTasks();
  });
};
  
const logCheck = () => {
  if (authZ.token) {
    return (
        <Switch>
          {/* homepage */}
          <Route exact path="/" render={(rp) => (<Homepage {...rp} tasks={tasks}/>)} />
          {/* taskList */}
          <Route path="/mylist" render={() => (<TaskList tasks={tasks} handleUpdate={handleUpdate} handleDelete={handleDelete} />)} />
          {/* single task */}
          <Route path="/task/:id" render={(rp) => (<OneTask {...rp} tasks={tasks} getOneTask={getOneTask} handleDelete={handleDelete}/>)} />
          {/* update existing task */}
          <Route path="/edit/:id" render={(rp) => (<AddEdit {...rp} username={authZ.username} tasks={tasks} handleCreate={handleCreate} handleUpdate={handleUpdate} handleDelete={handleDelete}/>)} />
          {/* create new task */}
          <Route path="/new" render={(rp) => (<AddEdit {...rp} username={authZ.username} tasks={tasks} handleCreate={handleCreate}/>)} />
          <Route path="/logout" render={(rp) => (<Logout {...rp} setAuthZ={setAuthZ}/>)} />
        </Switch>
    )
  } else if (authZ.token === null) {
    return (
      <Switch>
        {/* signup */}
        <Route path="/sign-up" render={(rp) => (<SignUp {...rp} url={url} setAuthZ={setAuthZ} />)} />
        {/* login */}
        <Route path="/logout" render={(rp) => (<Logout {...rp} setAuthZ={setAuthZ}/>)} />
        <Route path="/" render={(rp) => (<SignIn {...rp} url={url} setAuthZ={setAuthZ} />)} />
      </Switch>
    )
  }
}


  return (
    <div className="App">
      {logCheck()}
    </div>
  );
}

export default App;
