import React, { useState, useEffect } from "react"
import { Route, Link, Switch } from "react-router-dom";

import './App.css';

import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Logo from './components/Logo';
import Homepage from './pages/Homepage';

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
      <Route exact path="/" render={(rp) => (<Homepage {...rp} handleSubmit={handleCreate}/>)} />
      <SignInForm url={url} setAuthZ={setAuthZ} />
      <SignUpForm url={url} setAuthZ={setAuthZ} />
      <Logo />
    </div>
  );
}

export default App;
