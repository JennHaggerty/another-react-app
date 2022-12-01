import React, { Component } from 'react';
import styles from './App.module.scss';

import profilePic from "./assets/jpg/jennifer_portrait.JPG";

class App extends Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		user: {
			name: {
				first: "Jennifer",
				last: "Haggerty"
			},
			email: "thejenniferhaggerty@protonmail.com",
			location: "Remote, GEORGIA United States",
			website: "https://studiovonjenn.com",
			age: 100,
			pronouns: "She/xe",
			photo: profilePic,
			quote: "wee :D",
		}
	  };
	}

	render (){
		const user = this.state.user;

		const PhotoBox = () => {
			return (
				<div className={styles.profilePic}>
					<span className={styles.h1}>{user.name.first}</span>
					<div className="">
						<div className={styles.leftPanel}>
							<img 
							height="138px"
							width="170px"
								src={user.photo}
								alt={user.name.first + "'s profile photo"}
							/>
						</div>
						<div className={styles.rightPanel}>
							<div className={styles.row}>
								"{user.quote}"
							</div>
							<div className={styles.row}>
								{user.pronouns}
								<br />
								{user.age} years old
							</div>
							<div className={styles.row}>
								{user.location}
							</div>
							<div className={styles.row}>
								Last updated: today
							</div>
						</div>
						<a href={user.website}>View more pics</a>
					</div>
				</div>
			)
		}

		const ContactBox = () => {
			return(
				<div className={styles.contact}>
					<h2>Contacting {user.name.first}</h2>
					<table>
						<tbody>
							<tr>
								<th>
									Email
								</th>
								<td>
									<a href={"mailto:" + user.email}>
										Send Message
									</a>
								</td>
								{/*
								<th>
									Current Website
								</th>
								<td>
									<button
										type="button"
										className={styles.btnAsLink}
										onClick={() => {
											window.navigator.clipboard.writeText(window.location.href);
										}}
										aria-label="Click to copy url and share it."
									>
										Forward to friend
									</button>
								</td>
								*/}
							</tr>
						</tbody>
					</table>
				</div>
			)
		}

		return (
			<div className={styles.app}>
				{/* 
				<header className={styles.banner} aria-hidden="true">
					<span className={styles.hidden}>
						<h2 className={styles.hidden}>Search:</h2>
						For now this is a placeholder to display the pretty blue banner.
						TODO: Add the Search bar feature that will search and highlight terms in page or,
							if the user selects search the web we'll send them over to Brave.
					</span>
				</header>
				<nav className={styles.navigation} aria-hidden="true">
					<span className={styles.hidden}>
						<h2 className={styles.hidden}>Navigation:</h2>
						Navigation placeholder.
					</span>
				</nav>
				*/}
				<main className={styles.main}>
					<section className={styles.leftPanel}>
						<PhotoBox />
						<ContactBox />
						<div className={styles.interests}></div>
						<div className={styles.details}></div>
						<div className={styles.school}></div>
						<div className={styles.networking}></div>
						<div className={styles.companies}></div>
					</section>
					<section className={styles.rightPanel}>
						<div className={styles.network}>
							<h1>{user.name.first} is a web developer in your virtual network</h1>
						</div>
						<div className={styles.blog}></div>
						<div className={styles.blurbs}></div>
						<div className={styles.friends}></div>
						<div className={styles.comments}></div>
					</section>
				</main>
				{/*
				<footer className={styles.footer}></footer>
				*/}
			</div>
		)
	}
}

export default App;
