import styles from "./searchPage.module.scss";

export default function Search() {
	return (
		<div className={styles.searchPageWrap}>
			<div className={styles.searchPageContainer}>
				<h1 className={styles.searchPageTitle}>Поиск адреса по id</h1>
			</div>
		</div>
	);
}
