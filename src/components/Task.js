import PropTypes from 'prop-types'
import Button from './Button'

//onDoubleClick is not working
const Task = ({task,onDelete,onToggle}) => {
  return (
    <div className="task"  onClickCapture={()=>onToggle(task.id)}>
        <div className="header">
        <h3>
            {task.text} 
        </h3>
        <Button text='x' color='red' onClick={()=>onDelete(task.id)}/>
        </div>
        
        <p >{task.day}</p>
    </div>
  )
}

Task.propTypes={
    onDelete:PropTypes.func.isRequired
}

export default Task