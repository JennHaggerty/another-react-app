import React from "react";
import styles from "./contact.module.scss";

import emailIcon from "../../assets/images/icon_email.gif";
import forwardIcon from "../../assets/images/icon_forward.gif";

export const ContactBox = ({
  fname,
  email,
  customClass
}) => {
  return (
    <div id="contact" className={customClass ?  styles.contact_box + " " + customClass : styles.contact_box}>
      <h2>Contacting {fname}</h2>
      <table>
        <tbody>
          <tr>
            <th>
              <img className={styles.contactIcon} src={emailIcon} alt={"Click to email " + fname} />
            </th>
            <td>
              <a href={"mailto:" + email}>
                Send Message
              </a>
            </td>
            <th>
              <img className={styles.contactIcon} src={forwardIcon} alt={"Click to download " + fname + "'s resume"} />
            </th>
            <td>
              <button
                type="button"
                className="style-as-link"
                onClick={() => {
                  //print resume

                  //copy link to url
                  //window.navigator.clipboard.writeText(window.location.href);
                }}
              >
                Forward to friend
              </button>
            </td>
          </tr>
          {/**
          <tr>
            <th>

            </th>
            <td>
              Add to Friends
            </td>
            <th>Bookmark</th>
            <td>
              <button
                type="button"
                onClick={() => {
                  //print resume
                }}
              >
                Add to Favorites
              </button>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>Instant Message</td>
            <th>Block website</th>
            <td>
              <button
                type="button"
                onClick={() => {
                  //pop module asking if user wants to request deblock lint via email
                  //send email
                  //add ip to blocklist
                }}
              >Block User
              </button>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <a href="local">Add to Group</a>
            </td>
            <th>Click to be navigated to a review site</th>
            <td>
              <button 
                onClick={() => {
                  // navigate to social site
                }}
              >
                Rank User
              </button>
            </td>
          </tr>
            * 
            */}
        </tbody>
      </table>
    </div>
  )
}