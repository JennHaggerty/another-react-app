import React from "react";
import styles from "./blurbs.module.scss";

export const BlurbsBox = ({
  title,
  about,
  likeToMeet,
  customClass
}) => {
  const AboutMe = () => {
    return (
      <div className={styles.about}>
        <h3 className={styles.orangeText}>About me:</h3>
        <div>
          {about}
        </div>
      </div>
    )
  }
  const LikeToMeet = () => {
    return (
      <div className={styles.meet}>
        <h3 className={styles.orangeText}>Who I'd like to meet:</h3>
        <div>
          {likeToMeet}
        </div>
      </div>
    )
  }
  return (
    <div id="blurbs" className={customClass ? customClass : ""}>
      <h2>
        {title}'s Blurbs
      </h2>
      <AboutMe />
      <LikeToMeet />
    </div>
  )
}