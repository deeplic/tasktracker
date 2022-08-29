import React from 'react'

const tasks=[
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
]
const Task = () => {
  return (
    <>
    {tasks.map((task)=>(
        <h3 key={task.id}>{task.text}</h3>
    ))}
    </>
  )
}

export default Task