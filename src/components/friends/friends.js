import React from "react";
import styles from "./friends.module.scss";

export const FriendsBox = ({
  title,
  children,
  customClass
}) => {
  return (
    <div id="friends" className={customClass ? customClass + " " + styles.friend_box : styles.friend_box}>
      <h2>{title}'s Friend Space</h2>
    </div>
  )
}