import PropTypes from 'prop-types'

const onClick=()=>{
    console.log("clicked")
}
function Button({color,text}) {
  return (
    <button onClick={onClick} style={{background:color}} className='btn'>
            {text}
        </button>
  )
}

Button.defaultProps={
    color:'steelblue'
}

Button.propTypes={
    color:PropTypes.string,
    text: PropTypes.string
}
export default Button