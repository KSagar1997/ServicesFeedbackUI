import {FaTrash, FaEdit } from 'react-icons/fa'
import {useContext} from 'react'
import Card from "./shared/Card";
import PropTypes from 'prop-types'  
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {

   const { deleteFeedback, editFeedback} = useContext(FeedbackContext)
  

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close' onClick={() => deleteFeedback(item.id)}> 
          <FaTrash color= '#2a2a2a' size={18}/>
        </button>
        <button className='edit' onClick={() =>editFeedback(item)}> 
          <FaEdit color= '#f16775' size={18}/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes ={ 
  item: PropTypes.object.isRequired,
  
}

export default FeedbackItem
        