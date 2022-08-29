import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState,useEffect} from 'react'
import AddTask from "./components/AddTask";

function App() {
  //can write javascript here
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState([])

  useEffect(()=>{
    const getTasks=async()=>{
      const tasksFromServer= await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])
 //fetching tasks
  const fetchTasks=async ()=>{
    const res=await fetch('http://localhost:5000/tasks')
    const data=await res.json()
    return data;
  }
//Deleete task
const deleteTask=async (id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE'
  })
  setTasks(tasks.filter((task)=>task.id!==id))
}

//Toogle reminder
const toggleReminder= (id)=>{
  setTasks(tasks.map(task=>
    task.id===id?{...task,reminder:!task.reminder}:task))
}

//Add Task
const addTask=async (task)=>{
 const res= await fetch(`http://localhost:5000/tasks`,{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(task)
  })

  const data=await res.json()
  setTasks([...tasks,data])
  /*const id=Math.floor(Math.random()*100000)+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])*/
}

//Toggle form
const toggleForm=()=>{
  setShowAddTask(!showAddTask)
}
  return (
    <div className="container">
      <Header onShowForm={toggleForm} showAdd={showAddTask}/>
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
