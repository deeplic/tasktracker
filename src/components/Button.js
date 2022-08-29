import PropTypes from 'prop-types'

function Button({color,text}) {
  return (
    <button style={{background:color}} className='btn'>
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