import React, { Component } from 'react';
import styles from './App.module.scss';
import './App.scss';

import Table from "./shared/table"

import profile_pic from "./assets/jpg/jennifer_portrait.JPG";

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
				location: "Remote, EST United States",
				website: "https://studiovonjenn.com",
				age: 100,
				pronouns: "She/xe",
				photo: profile_pic,
				quote: "wee :D",
				about: `Jennifer enjoys developing websites and apps that warrant repeat visits through their accessibility
				and ease of use in frontend development.`,
				likeToMeet: `I'd like to meet people interested in video games, home improvement, and talking code.`,
				interests: [
					{
						title:"General",
						text: `Dogs, painting, costume making, blacksmithing, immersive conventions and events.`
					},
					{
						title:"Music",
						text: `Metal, medieval, goth, synthwave.`
					},
					{
						title:"Movies",
						text: `90's slashers, epic fantasies, the occasional tearjerker.`
					},
					{
						title:"Television",
						text: `Mostly for background while gaming or sewing.`
					},
					{
						title:"Books",
						text: `Supernatural detective stories are my guilty pleasure.`
					},
					{
						title:"Heroes",
						text: `Cassandra Pentaghast, Haurchefant Greystone, Olivier Mira Armstrong`
					}
				],
				details: [
					{
						title: "Status",
						text: `Full-time`,
					},
					{
						title: "Here for",
						text: `Friends, Networking`,
					},
					{
						title: "Hometown",
						text: `Kaiserslautern`,
					},
					{
						title: "Education",
						text: `BS, AAS`,
					},
					{
						title: "Occupation",
						text: `Front-end Engineer`,
					},
				],
				schools: [
					{
						title: `
						University of South Carolina
						Columbia, SOUTH CAROLINA
						Grad Year: 2012
						Student Status: Alumni
						Degree: BA
						Major: Studio arts
						`,
						text: "From 2008 to 2012"
					},
					{
						title: `
						Augusta Technical College
						Augusta, GEORGIA
						Grad Year: 2021
						Student Status: Alumni
						Degree: AAS
						Major: C#, Java, and cross-platform programming
						`,
						text: "From 2021 to 2021"
					}
				],
				companies: [
					{
						title: "Frontend Engineer at TaxSlayer",
						text: `
							Apply C#, HTML/CSS, React, and JavaScript alterations to in-house applications.
							Triage broken elements and functionality.
							On-call support for consumer application.
							Execute brand cohesive website and marketing campaigns with designer provided comps.
							Participate in daily standups, bi-weekly grooming sessions, and adapt to SCRUM/AGILE/Kanban methodologies.
						`,
						time: "September 2021 - Present",
					},
					{
						title: "Developer, Support Specialist in freelance",
						text: `
							Apply PHP, CSS, and JavaScript alterations to client themes.
							Keep website plugins and Wordpress versions up-to-date; triage broken elements and functionality.
							Working with graphic designers in creating brand cohesive ecommerce website and marketing campaigns.
							Build, and host, web appliances using Wordpress and Shopify.
						`,
						time:"November 2015 - December 2021",
					},
					{
						title: "Platform Integrations Specialist at GoCollect LLC",
						text: `
							Pushed test driven and versioned development through MVC PHP framework.
							Automated company onboarding process with Docker and Ansible.
							Prototype campaigns from wireframe mockup and push to UI implementation.
							Created inventory app; Node.js and JavaScript in the backend, React on the frontend.
							Provided documentation for app, onboarding, case studies, and customized code.
						`,
						time:"March 2019 - April 2020",
					},
					{
						title: "Software Engineer at Fast Growing Trees ",
						text: `
							Merged disparate PHP modules into a single governing module.
							Reduced overhead of using multiple third party ecommerce services.
							Conformed module stylesheets, CSS, Bootstrap, Flexbox, to brand.
							Interpreted SQL data with PHP returning metadata and stylizing with CSS and jQuery.
							Addressed critical ADA Compliance elements on mobile and desktop platforms.
							Automated daily reporting for core operations with PHP, javaScript, MySQL and MSSQL.
						`,
						time:"January 2018 - February 2019",
					},
					{
						title: "Web Developer at DigitalDerm Inc.",
						text: `
							Migrated website from GoDaddy hosting to AWS leading to a significant reduction in operation costs.
							Converted static HTML/CSS website for in-house web administration using Wordpress.
							Themed site with responsive design, materially increasing SEO ranking.
							Handled social engagement and email campaigns as acting marketing manager.
						`,
						time:"November 2015 - December 2017",
					}
				]
			}
	  };
	}

	render (){
		const user = this.state.user;

		const NetworkBox = () => {
			return (
				<div className={styles.network}>
					<h1>{user.name.first} is in your virtual network</h1>
				</div>
			)
		}

		const PhotoBox = () => {
			return (
				<div className={styles.profile_pic}>
					<span className={styles.h1}>{user.name.first}</span>
					<div className={
						styles.d_flex 
						+ " " + 
						styles.flex_Row 
						+ " " + 
						styles.space_between 
						+ " " + 
						styles.panels}
					>
						<div className={styles.left_panel}>
							<img 
								src={user.photo}
								alt={user.name.first + "'s profile photo"}
							/>
						</div>
						<div className={styles.right_panel}>
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
					</div>
					<a href={user.website}>View more pics</a>
				</div>
			)
		}

		const ContactBox = () => {
			return(
				<div className={styles.blueTable}>
					<h2 className={styles.blue_header}>Contacting {user.name.first}</h2>
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
								<th>
									Resume
								</th>
								<td>
									<button
										type="button"
										className={styles.btnAsLink}
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

		/**
		 * 
		 * blue tables
		 */
		const InterestsBox = () => {
			return (
				<div className={styles.blueTable}>
					<h2>
						{user.name.first}'s Interests
					</h2>
					<Table children={user.interests} />
				</div>
			)
		}
		const DetailsBox = () => {
			return (
				<div className={styles.blueTable}>
					<h2>
						{user.name.first}'s Details
					</h2>
					<Table children={user.details} />
				</div>
			)
		}
		const SchoolsBox = () => {
			return (
				<div className={styles.blueTable}>
					<h2>
						{user.name.first}'s Schools
					</h2>
					<Table children={user.schools} />
				</div>
			)
		}
		const CompaniesBox = () => {
			return (
				<div className={styles.blueTable}>
					<h2>
						{user.name.first}'s Companies
					</h2>
					<Table children={user.companies} />
				</div>
			)
		}
		/**
		 * END blue tables
		 */

		/**
		 * 
		 * orange
		 */
		const  BlurbsBox= () => {
			const AboutMe = () => {
				return (
					<div>
						<h3 className={styles.orange}>About me:</h3>
						<div>
							{user.about}
						</div>
					</div>
				)
			}
			const LikeToMeet = () => {
				return (
					<div>
						<h3 className={styles.orange}>Who I'd like to meet:</h3>
						<div>
							{user.likeToMeet}
						</div>
					</div>
				)
			}

			return (
				<>
					<h2>{user.name.first}'s Blurbs</h2>
					<AboutMe />
					<LikeToMeet />
				</>
			)
		}
		const FriendsBox = () => {
			return (
				<div>
					<h2>{user.name.first}'s Friend Space</h2>
				</div>
			)
		}
		/**
		 * END orange
		 */
		return (
			<div className={styles.app + " " + styles.d_flex}>
				<header className={styles.banner} aria-hidden="true">
					<span className="hidden">
						<h2 className="hidden">Search:</h2>
						For now this is a placeholder to display the pretty blue banner.
						TODO: Add the Search bar feature that will search and highlight terms in page or,
							if the user selects search the web we'll send them over to Brave.
					</span>
				</header>
				<nav className={styles.navigation} aria-hidden="true">
					<span className="hidden">
						<h2 className="hidden">Navigation:</h2>
						Navigation placeholder.
					</span>
				</nav>
				<main className={styles.d_flex + " " + styles.flex_Row}>
					<section className={styles.left_panel}>
						<PhotoBox />
						<ContactBox />
						<InterestsBox />
						<DetailsBox />
						<SchoolsBox />
					</section>
					<section className={styles.right_panel}>
						<NetworkBox />
						<BlurbsBox />
						<FriendsBox	/>
						<CompaniesBox />
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
