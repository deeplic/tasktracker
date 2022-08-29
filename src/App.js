import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";

function App() {
  //can write javascript here
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:"Professor Consultation",
        day:'Feb 5th at 9:30am',
        reminder:true,
    },
    {
        id:2,
        text:"Attend Lecture",
        day:'Feb 5th at 12:30pm',
        reminder:true,
    },
    {
        id:3,
        text:"Presentation",
        day:'Feb 5th at 2:30pm',
        reminder:true,
    }
])

//Deleete task
const deleteTask=(id)=>{
  console.log('delete',id)
  setTasks(tasks.filter((task)=>task.id!==id))
}

//Toogle reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map(task=>
    task.id===id?{...task,reminder:!task.reminder}:task))
}

//Add Task
const addTask=(task)=>{
  const id=Math.floor(Math.random()*100000)+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}

//Toggle form
const toggleForm=()=>{
  setShowAddTask(!showAddTask)
}
  return (
    <div className="container">
      <Header onShowForm={toggleForm}/>
      {showAddTask?
      <AddTask onAdd={addTask}/>:''}
      
      {tasks.length>0?
        <Tasks tasks={tasks} onDelete={deleteTask} 
        onToggle={toggleReminder}/>
        :'No task to show'}
    </div>
  );
}

export default App;
