import React from 'react'
import './Widgets.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import{ TwitterTweetEmbed,TwitterTimelineEmbed,TwitterShareButton} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchOutlinedIcon className="widgets__searchIcon"/>
        <input placeholder="search Twitter" type="text"/>
      </div>

      <div className="widgets__widgetscContainer">
           <h2> What's Happening </h2>
        <TwitterTweetEmbed tweetId={"10765432100123456789"}/>

        <TwitterTimelineEmbed 
          sourceType="profile"
          screenName="cleverqazi"
          options={{height:1000}}
        />
        <TwitterShareButton
        
        url={"https://facebook.com/cleverprogrammer"}
        options={{text:"#reactjs is awesome",via:"cleverqazi"}}/>




      </div>

    </div>
  )
}

export default Widgets