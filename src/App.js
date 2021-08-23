import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Logo from './components/Logo';
import Homepage from './pages/Homepage';

function App() {

const url = "https://adulting-backend.herokuapp.com";
const [todo, setTodo] = React.useState([]);

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
  fetch(url + "/todo")
  .then((response) => response.json())
  .then((data) => {
    setTodo(data);
  });
};

React.useEffect(() => getTodo(), []);

// CREATE
const handleCreate = (newTodo) => {
  fetch(url + "/todo", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
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
  }).then(() => {
    getTodo();
  });
};
  

return (
    <div className="App">
      <h1>#adulting is hard</h1>
      <SignInForm url={url}/>
      <SignUpForm url={url}/>
      <Route exact path="/" render={(rp) => (<Homepage {...rp} />)} />
      <Logo />
    </div>
  );
}

export default App;
