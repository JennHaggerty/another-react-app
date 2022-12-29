import React from "react";

import styles from "./theme-palette.module.scss";
import paletteIcon from "../../assets/images/color_palette.png";

export const ThemePalette = () => {
  return (
    <button type="button" className={"style-as-link " + styles.palette}>
      Website theme palette
      <img src={paletteIcon} alt="Click to change the color theme of this website!" />
    </button>
  )
}