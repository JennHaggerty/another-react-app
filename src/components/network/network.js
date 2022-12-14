import React from "react";
import styles from "./network.module.scss";

export const NetworkBox = ({
  title,
  customClass
}) => {
  return (
    <div id="network_box" className={customClass ? styles.network + " " + customClass : styles.network}>
      <h1>{title} is in your virtual network</h1>
    </div>
  )
}