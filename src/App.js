import logo from './logo.svg';
import './App.css';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm'

function App() {
  return (
    <div className="App">
      <h1>#adulting is hard</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default App;
