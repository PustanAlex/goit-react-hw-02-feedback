import React, { useState } from 'react';
import Feedback from './Feedback/Feedback'; 
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0
   });

   const handleFeedback = (type) => {
    setState((prevState) => {
      const updatedState = {
        ...prevState,
        [type]: prevState[type] + 1,
        total: prevState.total + 1
      };
  
      updatedState.positiveFeedback = Math.round((updatedState.good / updatedState.total) * 100);
  
      return updatedState;
    });
  };
  
  const { good, neutral, bad, total, positiveFeedback } = state; 

  return (
    <div className='main'>
      <Section title='Leave Feedback'>
          <Feedback onLeaveFeedback={handleFeedback}/>
      </Section>
      <Section title='Statistics'>

        {total > 0 ? <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={total} 
            positiveFeedback={positiveFeedback} /> : <Notification message='There is no feedback'/>}
        
      </Section>
    </div>
  );
};
