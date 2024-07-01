import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

export default function App() {
  return (
    <div className="App">
      <h1>My Todo-List App</h1>
      <div className="main-app">
        <div></div>
        <TaskList/>
        <AddTask/>
        <div></div>
      </div>
    </div>
  );
}
