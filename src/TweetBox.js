import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css';
import db from './firebase'
function TweetBox() {
    const[tweetMeessage,setTweetMessage]=useState("");
    const[tweetImage,setTweetImage]=useState("");

    const sendTweet=e=>{
      e.preventDefault();
      db.collection ("posts").add({
        displayName:"vinay kumar",
        username:"clevervinay",
        verified:true,
        text:tweetMeessage,
        image:tweetImage,
        avatar:"https://www.w3schools.com/w3images/avatar2.png"

      });
      setTweetMessage("");
      setTweetImage("");
    }



  return (
    <div className="tweetBox">
         
         <form>
            <div className="tweetBox__input">
            <Avatar alt="" src="https://www.w3schools.com/w3images/avatar2.png" />
            <input 
            onChange={(e)=>setTweetMessage(e.target.value)}
             value={tweetMeessage}
            placeholder="whats happening ?" type="text"/>
            
           
            </div>
                        <input  
                        value={tweetImage}
                        onChange={(e)=>setTweetImage(e.target.value)}
                         className="tweetBox__imageInput"
                        placeholder=" Optional:enter image url" type="text"/> 
                        

            <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton"> Tweet</Button>
         </form>

    </div>
  )
}

export default TweetBox