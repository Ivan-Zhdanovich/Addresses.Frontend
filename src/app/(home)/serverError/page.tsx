import styles from "./serverErrorPage.module.scss";

export default function ServerError() {
	return (
		<div className={styles.serverErrorContainer}>
			<h1>Ошибка сервера....</h1>;
		</div>
	);
}
