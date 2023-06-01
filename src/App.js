import './App.css';
import Navbar from './components/navbar/Navbar';
import TaskList from './components/Tasklist/TaskList';
import React, {useState} from 'react';


// MODELO DA TASK (OBJETO):
const task = {
    id:0,
    title: "Nova tarefa",
    state: "pendente"
};


// MÉTODO QUE GERA ID's INCREMENTAL:
let idAcc = 0;
const generateId = () =>{
  idAcc++;
  return idAcc;
};


export default function App() {  

  // CRIANDO UMA VARIAVEL/CONSTANTE TASKS E DIZENDO QUE ELA POSSUI ESTADO:
  const [tasks, setTasks] = useState([]); 
  
  //CRIANDO MÉTODO CONSTRUTOR DE TASKS:
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };

    // AGORA VOU ADICIONAR A TASK QUE CRIEI A LISTA DE TASKS:
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    })
  };

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <TaskList title= "Pendente" onAddTask={addTask} tasks={tasks} />
      </div>
    </div>
  );
}

