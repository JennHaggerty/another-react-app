import React from 'react';
import { useWindowDimensions } from './shared/windowDimensions';

import './App.scss';
import './assets/stylesheets/variables2004.scss';
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
import ConditionalRender from './shared/conditionalRender';

export const App = () => {
  const { width } = useWindowDimensions();
	const isMobile = width < 1024;

	return (
		<>
			<Header />
			<main>
				<ConditionalRender isShown={isMobile}>
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
							customClass={styles.primaryBox}
						/>
						<BlurbsBox
							title={user.fname}
							about={user.about}
							likeToMeet={user.likeToMeet}
							customClass={styles.secondaryBox}
						/>
						<InterestsBox
							title={user.fname}
							children={user.interests}
							customClass={styles.primaryBox + " " + styles.primaryTable}
						/>
						<CompaniesBox
							title={user.fname}
							children={user.companies}
							customClass={styles.primaryBox + " " + styles.primaryTable}
						/>
						<SchoolsBox
							title={user.fname}
							children={user.schools}
							customClass={styles.primaryBox + " " + styles.primaryTable}
						/>
				</ConditionalRender>
				<ConditionalRender isShown={!isMobile}>
				<div className={styles.columns}>
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
							customClass={styles.primaryBox}
						/>
						<InterestsBox
							title={user.fname}
							children={user.interests}
							customClass={styles.primaryBox + " " + styles.primaryTable}
						/>
						<DetailsBox
							title={user.fname}
							children={user.details}
							customClass={styles.primaryBox + " " + styles.primaryTable}
						/>
						<SchoolsBox
							title={user.fname}
							children={user.schools}
							customClass={styles.primaryBox + " " + styles.primaryTable}
						/>
					</div>
					<div className={styles.column}>
						<NetworkBox title={user.fname} />
						<BlurbsBox
							title={user.fname}
							about={user.about}
							likeToMeet={user.likeToMeet}
							customClass={styles.secondaryBox}
						/>
						<FriendsBox
							title={user.fname}
							customClass={styles.secondaryBox}
							children={user.friends}
						/>
						<CompaniesBox
							title={user.fname}
							children={user.companies}
							customClass={styles.secondaryBox + " " + styles.secondaryTable}
						/>
					</div>
				</div>
				</ConditionalRender>
			</main>
		</>
	)
}

export default App;
