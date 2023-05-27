import './App.css';
import Navbar from './components/navbar/Navbar';
import TaskList from './components/Tasklist/TaskList';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TaskList title= "Pendente" />
        <TaskList title= "Em andamento" />
        <TaskList title= "Finalizado" />
      </div>
    </div>
  );
}

export default App;
