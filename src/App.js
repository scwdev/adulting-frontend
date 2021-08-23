import { useState, useEffect } from "react"

import './App.css';

import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Logo from './components/Logo';

function App() {

const url = "https://adulting-backend.herokuapp.com";
const [ todo, setTodo ] = useState([]);
const [ authZ, setAuthZ ] = useState({username: null, token: null})

// GET
const getTodo = () => {
  fetch(url + "/todo")
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
      <SignInForm url={url} setAuthZ={setAuthZ} />
      <SignUpForm url={url} setAuthZ={setAuthZ} />
      <Logo />
    </div>
  );
}

export default App;
