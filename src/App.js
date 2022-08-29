import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'

function App() {
  //can write javascript here
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
}

  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
