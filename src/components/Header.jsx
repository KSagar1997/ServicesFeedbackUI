import PropTypes from 'prop-types'  
import {VscFeedback} from 'react-icons/vsc'



function Header({ text, bgColor, textColor }) {
 const headerStyles={ 
  backgroundColor: bgColor, 
  color: textColor,
 }

  return (
    <header style={headerStyles}>
        <div className="container"> 
        <h2><VscFeedback color= '#fee36e' size={35}/> {text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps ={ 
  text: 'Feedback Our Services',
  bgColor:'#2a2a2a' ,
  textColor:'#ff6a95',
}

Header.propTypes ={ 
  text:PropTypes.string,
}

export default Header
