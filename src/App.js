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

// import Logo from './components/Logo';

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
  setTasks(data);
};

useEffect(async () => {await getTasks()}, [authZ]);

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
const deleteTask = (input) => {
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
    console.log(tasks)
    return (
        <Switch>
          {/* homepage */}
          <Route exact path="/" render={(rp) => (<Homepage {...rp}/>)} />
          {/* taskList */}
          <Route path="/mylist" render={() => (<TaskList tasks={tasks} handleUpdate={handleUpdate} />)} />
          {/* single task */}
          <Route path="/task/:id" render={() => (<OneTask/>)} />
          {/* update existing task */}
          <Route path="/edit/:id" render={(rp) => (<AddEdit {...rp} username={authZ.username} tasks={tasks} handleCreate={handleCreate}/>)} />
          {/* create new task */}
          <Route path="/new" render={(rp) => (<AddEdit {...rp} username={authZ.username} handleCreate={handleCreate}/>)} />
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
  
    </div>
  );
}

export default App;
