import React from "react";
import styles from "./profile-pic.module.scss";
import AppStyles from "../../App.module.scss"

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
    <div id="profile_pic" className={styles.profile_pic}>
      <span className={AppStyles.h1}>{fname} {lname}</span>
      <div className={
        AppStyles.d_flex 
        + " " + 
        AppStyles.flex_Row 
        + " " + 
        AppStyles.space_between 
        + " " + 
        AppStyles.panels}
      >
        <div className={AppStyles.left_panel}>
          <img 
            src={photo}
            alt={fname + "'s profile photo"}
          />
        </div>
        <div className={AppStyles.right_panel}>
          <div className={AppStyles.row}>
            "{quote}"
          </div>
          <div className={AppStyles.row}>
            {pronouns}
            <br />
            {age} years old
          </div>
          <div className={AppStyles.row}>
            {location}
          </div>
          <div className={AppStyles.row}>
            Last updated: today
          </div>
        </div>
      </div>
      <a href={photoLink}>View more pics</a>
    </div>
  )
}