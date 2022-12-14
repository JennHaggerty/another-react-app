import React, { Component } from 'react';

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
			<div className={styles.app + " " + styles.d_flex}>
				<Header />
				<main className={styles.d_flex + " " + styles.flex_Row}>
					<section className={styles.left_panel}>
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
						/>
						<InterestsBox
							title={user.fname}
							children={user.interests}
							//customClass={divStyles.blueTables}
						/>
						<DetailsBox
							title={user.fname}
							children={user.details}
							//customClass={divStyles.blueTables}
						/>
						<SchoolsBox
							title={user.fname}
							children={user.schools}
							//customClass={divStyles.blueTables}
						/>
					</section>
					<section className={styles.right_panel}>
						<NetworkBox title={user.fname} />
						<BlurbsBox
							title={user.fname}
							about={user.about}
							likeToMeet={user.likeToMeet}
							//customClass={divStyles.orangeTables}
						/>
						<FriendsBox
							title={user.fname}
						/>
						<CompaniesBox
							title={user.fname}
							children={user.companies}
							//customClass={divStyles.blueTables}
						/>
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
