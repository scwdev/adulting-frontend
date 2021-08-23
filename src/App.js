import React, { useState, useEffect } from "react"
import { Route, Link, Switch } from "react-router-dom";

import './App.css';

import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TaskList from "./pages/TaskList";
import OneTask from "./pages/OneTask";
import AddEdit from "./pages/AddEdit";

import Logo from './components/Logo';

function App() {

const url = "https://adulting-backend.herokuapp.com";
const [ task, setTask ] = useState([]);
const [ authZ, setAuthZ ] = useState({username: null, token: null})

const emptyTask = {
  username: "",
  name: "",
  frequency: "",
  countdown: "",
  tags: "",
  checklist: ""
};

const [selectedTask, setSelectedTask] = React.useState(emptyTask);

// GET
const getTask = () => {
  fetch(url + "/tasks", {
    headers: {
      "authorization": authZ.token,
    },
  })
  .then((response) => response.json())
  .then((data) => {
    setTask(data);
  });
};

useEffect(() => getTask(), []);

// CREATE
const handleCreate = (newTask) => {
  fetch(url + "/tasks", {
    method: "post",
    headers: {
      "authorization": authZ.token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask),
  }).then(() => {
    getTask();
  });
};

// UPDATE
const handleUpdate = (task) => {
  fetch(url + "/tasks/" + task._id, {
    method: "put",
    headers: {
      "authorization": authZ.token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task),
  }).then(() => {
    getTask();
  });
};

const selectTask = (task) => {
  setSelectedTask(task);
};

// DELETE
const deleteWeed = (task) => {
  fetch(url + "/tasks/" + task._id, {
    method: "delete",
    headers: {
      "authorization": authZ.token,
      "Content-Type": "application/json"
    },
  }).then(() => {
    getTask();
  });
};
  
const logCheck = () => {
  if (authZ.token) {
    return (
        <Switch>
          {/* homepage */}
          <Route exact path="/" render={(rp) => (<Homepage {...rp}/>)} />
          {/* taskList */}
          <Route path="/mylist" render={() => (<TaskList />)} />
          {/* single task */}
          <Route path="/task/:id" render={() => (<OneTask/>)} />
          {/* create/update task */}
          <Route path="/edit/:id" render={(rp) => (<AddEdit {...rp} username={authZ.username} handleSubmit={handleCreate}/>)} />
        </Switch>
    )
  } else {
    return (
      <Switch>
        {/* signup */}
        <Route exact path="/sign-up" render={(rp) => (<SignUp {...rp} url={url} setAuthZ={setAuthZ} />)} />
        {/* login */}
        <Route path="/" render={(rp) => (<SignIn {...rp} url={url} setAuthZ={setAuthZ} />)} />
      </Switch>
    )
  }
}


  return (
    <div className="App">
      <h1>#adulting is hard</h1>
      {logCheck()}
      <Logo />
    </div>
  );
}

export default App;
