import React from "react";

import styles from "./theme-theme.module.scss";
import themeIcon from "../../assets/images/color_theme.png";

export const Theme = () => {
  return (
    <button type="button" className={"style-as-link " + styles.theme}>
      Website theme
      <img src={themeIcon} alt="Click to change the color theme of this website!" />
    </button>
  )
}