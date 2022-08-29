import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onShowForm,showAdd}) => {
    const onClick=()=>{
        console.log('Clicked')
        onShowForm()
    }
  return (
    <header className='header'>
        <h1 >{title}</h1>
        <Button color={showAdd?"red":"green"} text={showAdd?"Close":"Add"} onClick={onClick}/>
    </header>
  )
}

Header.defaultProps={
    title: 'Task Tracker'
}

Header.propTypes={
    title:PropTypes.string.isRequired
}
//css in js
/*const headingStyle={
    color:'red',
    backgroundColor:"black"
}*/
export default Header