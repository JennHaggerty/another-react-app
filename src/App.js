import React, { Component } from 'react';
import styles from './App.module.scss';

import profilePic from "./assets/jpg/jennifer_portrait.JPG";

class App extends Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		user: {
			name: "Jennifer",
			photo: profilePic,
		}
	  };
	}

	render (){
		const user = this.state.user;

		const ProfilePicSection = () => {
			return (
				<div className={styles.profilePic}>
					<h1 className={styles.h1}>{user.name}</h1>
					<div className="">
						<div className={styles.leftPanel}>
							<img 
								src={user.photo}
								alt={user.name + "'s profile photo"}
							/>
						</div>
						<div className={styles.rightPanel}>
							
						</div>
					</div>
				</div>
			)
		}
		return (
			<div className="App">
				<header className={styles.banner}></header>
				<nav className={styles.navigation}></nav>
				<main className={styles.main}>
					<section className={styles.leftPanel}>
						<ProfilePicSection />
						<div className={styles.contact}></div>
						<div className={styles.interests}></div>
						<div className={styles.details}></div>
						<div className={styles.school}></div>
						<div className={styles.networking}></div>
						<div className={styles.companies}></div>
					</section>
					<section className={styles.rightPanel}>
						<div className={styles.network}></div>
						<div className={styles.blog}></div>
						<div className={styles.blurbs}></div>
						<div className={styles.friends}></div>
						<div className={styles.comments}></div>
					</section>
				</main>
				<footer className={styles.footer}></footer>
			</div>
		)
	}
}

/*
function App() {
	return (
	<div className="App">
		<header className={styles.banner}></header>
		<nav className={styles.navigation}></nav>
		<main className={styles.main}>
			<section className={styles.leftPanel}>
				<ProfilePicSection />
				<div className={styles.contact}></div>
				<div className={styles.interests}></div>
				<div className={styles.details}></div>
				<div className={styles.school}></div>
				<div className={styles.networking}></div>
				<div className={styles.companies}></div>
			</section>
			<section className={styles.rightPanel}>
				<div className={styles.network}></div>
				<div className={styles.blog}></div>
				<div className={styles.blurbs}></div>
				<div className={styles.friends}></div>
				<div className={styles.comments}></div>
			</section>
		</main>
		<footer className={styles.footer}></footer>
	</div>
	);
}
*/

export default App;
