import PropTypes from 'prop-types'
import Button from './Button'

const Task = ({task,onDelete}) => {
  return (
    <div className="task">
        <div className="header">
        <h3>
            {task.text} 
        </h3>
        <Button text='x' color='red' onClick={()=>onDelete(task.id)}/>
        </div>
        
        <p>{task.day}</p>
    </div>
  )
}

Task.propTypes={
    onDelete:PropTypes.func.isRequired
}

export default Task