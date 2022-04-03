import { v4 as uuidv4} from 'uuid';
import {createContext, useState } from 'react';


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children}) => {
    const [feedback, setFeedback] = useState([
        { 
            id:1,
            text: 'This is fedback item1',
            rating: 10
        },
        { 
            id:2,
            text: 'This is fedback item2',
            rating: 6
        },
        { 
            id:3,
            text: 'This is fedback itemgvkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkhchgchvvvjv jhvjvj  gjdfgajk gsdf sadgsda gsadg g agasd gsdag asdg asg ag sg asdgsd gasd g sadg fg jh gfdj  3',
            rating: 2
        },
        { 
            id:4,
            text: 'This is fedback item4',
            rating: 7
        },
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Add Feedback
    const addFeedback= (newFeedback)=>{ 
        newFeedback.id = uuidv4()
        // array of all the  current ...feedbak and add new feedcak inn front of that 
        setFeedback([newFeedback, ...feedback])
     }

    // Delete Feedback
    const deleteFeedback = (id) => { 
        if(window.confirm('Are You sure want to delete?')) { 
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    
    // Update Feedback
    const updateFeedback = (id, updItem) => { 
        setFeedback(feedback.map((item) => item.id ===id ? {...item, ...updItem} : item))
        
    }

    // Set item to be updated
    const editFeedback = (item) => { 
        setFeedbackEdit({ 
            item,
            edit: true
        })
    }

    return ( 
    <FeedbackContext.Provider value={{ 
        feedback,
        feedbackEdit, //Piece_of_state_hold the items
        deleteFeedback,
        addFeedback,
        editFeedback,  //Function 
        updateFeedback,

    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext