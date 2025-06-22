import styles from "./aboutPage.module.scss";

export default function About() {
	return (
		<div className={styles.aboutPageContainer}>
			<h1 className={styles.aboutPageTitle}>Страница о приложении.</h1>
			<p>Сделал Жданович И.В.</p>
		</div>
	);
}
