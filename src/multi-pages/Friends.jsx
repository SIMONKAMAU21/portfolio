import React from 'react';
import './Friends.scss';
import Left from '../Layout/LeftFriends';
import Right from '../Layout/RightFriends';

const Friends = () => {
  return (
   <>
   
   <div className="friends">
      <div className="friends-wrapper">
         <Left/>
         <Right/>
      </div>
   </div>
   </>
  )
}

export default Friends