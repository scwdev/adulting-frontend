import React, { useState, useEffect } from "react"
import { Route, Link, Switch } from "react-router-dom";

import './App.css';

import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TaskList from "./pages/TaskList";
import OneTask from "./pages/OneTask";
import CreateUpdate from "./pages/CreateUpdate";

import Logo from './components/Logo';
import Nav from "./components/Nav";

function App() {

const url = "https://adulting-backend.herokuapp.com";
const [ todo, setTodo ] = useState([]);
const [ authZ, setAuthZ ] = useState({username: null, token: null})

const emptyTodo = {
  username: "",
  name: "",
  frequency: "",
  countdown: "",
  tags: "",
  checklist: ""
};

const [selectedTodo, setSelectedTodo] = React.useState(emptyTodo);

// GET
const getTodo = () => {
  fetch(url + "/todo", {
    headers: {
      "authorization": authZ.token,
    },
  })
  .then((response) => response.json())
  .then((data) => {
    setTodo(data);
  });
};

useEffect(() => getTodo(), []);

// CREATE
const handleCreate = (newTodo) => {
  fetch(url + "/todo", {
    method: "post",
    headers: {
      "authorization": authZ.token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTodo),
  }).then(() => {
    getTodo();
  });
};

// UPDATE
const handleUpdate = (todo) => {
  fetch(url + "/todo/" + todo._id, {
    method: "put",
    headers: {
      "authorization": authZ.token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo),
  }).then(() => {
    getTodo();
  });
};

const selectTodo = (todo) => {
  setSelectedTodo(todo);
};

// DELETE
const deleteWeed = (todo) => {
  fetch(url + "/todo/" + todo._id, {
    method: "delete",
    headers: {
      "authorization": authZ.token,
      "Content-Type": "application/json"
    },
  }).then(() => {
    getTodo();
  });
};
  

  return (
    <div className="App">
      <h1>#adulting is hard</h1>
      <Nav/>
      <Switch>
        {/* homepage */}
        <Route exact path="/" render={(rp) => (<Homepage {...rp} />)} />
        {/* login */}
        <Route path="/login" render={(rp) => (<SignIn {...rp} url={url} setAuthZ={setAuthZ} />)} />
        {/* signup */}
        <Route path="/sign-up" render={(rp) => (<SignUp {...rp} url={url} setAuthZ={setAuthZ} />)} />
        {/* taskList */}
        <Route path="/mylist" render={() => (<TaskList />)} />
        {/* single task */}
        <Route path="/task/:id" render={() => (<OneTask/>)} />
        {/* create/update task */}
        <Route path="/edit/:id" render={() => (<CreateUpdate/>)} />
      </Switch>
      <Logo />
    </div>
  );
}

export default App;
