import React from "react";
import styles from "./friends.module.scss";

export const FriendsBox = ({
  title,
  children,
  customClass
}) => {
  const cards = children.map(({name, title, photo, url}, i) => {
    return (
      <div className={styles.card} key={name + "-" + i}>
        <div className="bold">
          { url ? (
            <a href={url}>
              {name}
            </a>
          ) : (
            <>
              {name}
            </>
          )}
        </div>
        <img className={styles.cardImg} src={photo} alt={name + "'s profile photo"} />
      </div>
    )
  });

  const friendCount = children.length;

  return (
    <div id="friends" className={customClass ? customClass + " " + styles.friends : styles.friends}>
      <h2>{title}'s Friend Space</h2>
      <div className={styles.title}>{title} has <span className={styles.count + " red"}>{friendCount}</span> Friends.</div>
      <div className={styles.cards}>{cards}</div>
    </div>
  )
}