import PropTypes from 'prop-types'  
import React from 'react'

function Card({children, reverse}) {
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>
//         {children}
//     </div>
//   )

return ( 
    <div className='card' style={{
        backgroundColor: reverse ? '#FEE36E' : '#fff',
        color: reverse ? '#2a2a2a' : '#2a2a2a',
    }}> 
    {children}
    </div>
)
}


Card.defaultProps = {
    reverse: false,
}
Card.prototype={ 
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card