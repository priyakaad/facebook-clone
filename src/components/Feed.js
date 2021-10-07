import React from 'react'
import Card from './Card'
import FBBox from "./FBBox"
import {Fragment} from "react"

const Feed = ({Birthdays, Pages, NewsFeed}) => {
  return (
    <div className="col-3 Feed">
      {Birthdays && Birthdays.length > 0 && (
      <FBBox>
        <div className="BirthdayContainer">
          <img src="https://i.imgur.com/getLrBR.png" alt="Gift"/>
          {Birthdays.map(user => (
          <Fragment key={user.FullName}>
          <a href={user.ProfileURL}>{user.FullName}</a>
          {", "}
          </Fragment>
           ))}
            and 3 others.
        </div>

      </FBBox>)}
      {Pages && Pages.length > 0 && (
      <FBBox>
        <div className="PagesContainer">
        <h4>Your Pages 
          <span>({Pages.length})</span></h4>
        <ul>
          {Pages.map(page =>(
            <li key={page.Avatar}>
            <img src={page.Avatar} alt={page.Name} />
            <div className="PageMeta">
              <a href={page.PageURL}>
                <strong>{page.Name}</strong>
              </a>
              <a href="/">
                <img src="https://i.imgur.com/mxriccd.png" alt="Messages"/>
                Messages ({page.MessageCount})
              </a>
              <a href="/">
                <img src="https://i.imgur.com/rtufAay.png" alt="Notifications"/>
                Notifications ({page.NotificationCount})
              </a>
            </div>
          </li> 
          ))}
          
        </ul>
          </div>
        </FBBox>)}
        {NewsFeed && NewsFeed.length && (
      <FBBox><div className="FeedsContainer">
        <h4>News Feed</h4>
        <ul>
          {NewsFeed.map((card, key) => (
            <li key={key}>
              <Card Image={card.Image} ImgAlign="top">
                <a href={card.NewsLink}>{card.Title}</a>
                <p className="m-0 text-muted">
                  Posted <abbr titile={card.DateTime}>{card.DatePosted}</abbr>
                </p>
              </Card>
              </li>
          ))}
        </ul>
          </div></FBBox> 
          )}
      </div>
  )
}

export default Feed;
