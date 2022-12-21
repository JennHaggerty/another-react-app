import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import './App.scss';
import './assets/stylesheets/2004_variables.scss';
import styles from './App.module.scss';

import { 
  BlurbsBox,
  CompaniesBox,
  ContactBox,
  DetailsBox,
  FriendsBox,
	Header,
  InterestsBox,
  NetworkBox,
  ProfilePic,
  SchoolsBox,
} from './components';

import user from './assets/user';

class App extends Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
			user: user
	  };
	}

	render (){
		const user = this.state.user;
		return (
			<>
				<Header />
				<main className={styles.columns}>
					<MobileView>
							<ProfilePic
								fname={user.fname}
								lname={user.lname}
								photo={user.photo}
								age={user.age}
								pronouns={user.pronouns}
								quote={user.quote}
								location={user.location}
								photoLink={user.photoLink}
							/>
							<ContactBox 
								fname={user.fname}
								email={user.email}
								customClass={styles.blueBox}
							/>
							<BlurbsBox
								title={user.fname}
								about={user.about}
								likeToMeet={user.likeToMeet}
								customClass={styles.orangeBox}
							/>
							<DetailsBox
								title={user.fname}
								children={user.details}
								customClass={styles.blueBox + " " + styles.blueTable}
							/>
							<InterestsBox
								title={user.fname}
								children={user.interests}
								customClass={styles.blueBox + " " + styles.blueTable}
							/>
							<CompaniesBox
								title={user.fname}
								children={user.companies}
								customClass={styles.blueBox + " " + styles.blueTable}
							/>
							<SchoolsBox
								title={user.fname}
								children={user.schools}
								customClass={styles.blueBox + " " + styles.blueTable}
							/>
					</MobileView>
					<BrowserView>
						<div className={styles.column}>
							<ProfilePic
								fname={user.fname}
								lname={user.lname}
								photo={user.photo}
								age={user.age}
								pronouns={user.pronouns}
								quote={user.quote}
								location={user.location}
								photoLink={user.photoLink}
							/>
							<ContactBox 
								fname={user.fname}
								email={user.email}
								customClass={styles.blueBox}
							/>
							<InterestsBox
								title={user.fname}
								children={user.interests}
								customClass={styles.blueBox + " " + styles.blueTable}
							/>
							<DetailsBox
								title={user.fname}
								children={user.details}
								customClass={styles.blueBox + " " + styles.blueTable}
							/>
							<SchoolsBox
								title={user.fname}
								children={user.schools}
								customClass={styles.blueBox + " " + styles.blueTable}
							/>
						</div>
						<div className={styles.column}>
							<NetworkBox title={user.fname} />
							<BlurbsBox
								title={user.fname}
								about={user.about}
								likeToMeet={user.likeToMeet}
								customClass={styles.orangeBox}
							/>
							<FriendsBox
								title={user.fname}
								customClass={styles.orangeBox}
							/>
							<CompaniesBox
								title={user.fname}
								children={user.companies}
								customClass={styles.blueBox + " " + styles.blueTable}
							/>
						</div>
					</BrowserView>
				</main>
				{/*
				<footer className={styles.footer}></footer>
				*/}
			</>
		)
	}
}

export default App;
