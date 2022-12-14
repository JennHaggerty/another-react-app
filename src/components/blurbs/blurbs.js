import React from "react";

export const BlurbsBox = ({
  title,
  about,
  likeToMeet,
  customClass
}) => {
  const AboutMe = () => {
    return (
      <div>
        <h3 className="orange">About me:</h3>
        <div>
          {about}
        </div>
      </div>
    )
  }
  const LikeToMeet = () => {
    return (
      <div>
        <h3 className="orange">Who I'd like to meet:</h3>
        <div>
          {likeToMeet}
        </div>
      </div>
    )
  }
  return (
    <div className={customClass ? customClass : ""}>
      <h2>
        {title}'s Blurbs
      </h2>
      <AboutMe />
      <LikeToMeet />
    </div>
  )
}