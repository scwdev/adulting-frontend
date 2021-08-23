import logo from './logo.svg';
import './App.css';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Logo from './components/Logo';

function App() {

  const usersUrl = "https://adulting-backend.herokuapp.com/user"

  return (
    <div className="App">
      <h1>#adulting is hard</h1>
      <SignInForm url={usersUrl}/>
      <SignUpForm url={usersUrl}/>
      <Logo />
    </div>
  );
}

export default App;
