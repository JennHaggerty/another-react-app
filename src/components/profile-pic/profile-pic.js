import React from "react";
import styles from "./profile-pic.module.scss";

export const ProfilePic = ({
  fname,
  lname,
  photo,
  age,
  pronouns,
  quote,
  location,
  photoLink,
}) => {
  return (
    <div id="profile_pic" className={styles.pic}>
      <h1 className="h1">{fname} {lname}</h1>
      <div className="dflex">
        <div className={styles.img}>
          <img 
            src={photo}
            alt={fname + "'s profile photo"}
          />
        </div>
        <div>
          <p>
            "{quote}"
          </p>
          <p>
            {pronouns}
            <br />
            {age} years old
          </p>
          <p>
            {location}
          </p>
          <p>
            Last updated: today
          </p>
        </div>
      </div>
      <a className={styles.view_more} href={photoLink}>View more pics</a>
    </div>
  )
}