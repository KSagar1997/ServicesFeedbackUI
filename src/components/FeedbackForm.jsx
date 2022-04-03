import React, {useState, useContext, useEffect} from 'react';
import {MdRateReview } from 'react-icons/md'
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackContext, { FeedbackProvider } from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisable, setbtnDisable] = useState(true)
  const [message, setMessage] = useState('')
  
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => { 
   if(feedbackEdit.edit === true){ 
     setbtnDisable(false)
     setText(feedbackEdit.item.text)
     setRating(feedbackEdit.item.rating)

   }
  }, [feedbackEdit])


  const handleTextChange = (e) => { 
    if(text===''){ 
      setbtnDisable(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length <=10){ 
      setbtnDisable(true)
      setMessage('Text must be 10 characters')
    }else{ 
      setMessage(null)
      setbtnDisable(false)
    }

   setText(e.target.value)
  }
  const handleSubmit=(e)=>{ 
    e.preventDefault()
    if(text.trim().length>10){ 
      const newFeedback ={ 
        text,
        rating,
      }
      if(feedbackEdit.edit === true){ 
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else { 
        addFeedback(newFeedback)
      }

      // Reset to default state after submission
      setbtnDisable(true)
      setRating(10)
      setText('')
    }
  }

  return (
    <Card >
        <form onSubmit={handleSubmit}>
            <h2><MdRateReview color= '#2a2a2a' size={28}/> How would you rate your services with us?</h2>
           <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='write a review' value={text}/>
                <Button type='submit' isDisabled={btnDisable} version='secondary'>Send</Button>
            </div>
            {message && <div className='message'> {message} </div>}
        </form>
    </Card>
  )
}

export default FeedbackForm