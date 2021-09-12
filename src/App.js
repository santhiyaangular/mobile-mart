import './App.css';
import Detail from './components/detail';
import List from './components/list';

function App() {
  return (
    <div className="App">
      hi
         <h1>Welcome to React</h1>
        <div>
          <label>Username</label>
          <label>Password</label>
          <input type="text"/>
          <button>Signup</button>
        </div>
        <List></List>
        <Detail></Detail> 
    </div>
  );
}

export default App;
