import styles from './App.module.scss';

function App() {
	return (
	<div className="App">
		<header className={styles.banner}></header>
		<nav className={styles.navigation}></nav>
		<main className={styles.main}>
			<section className={styles.leftPanel}>
				<div className={styles.profilePic}></div>
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

export default App;
