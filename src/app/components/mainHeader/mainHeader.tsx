import Link from "next/link";
import styles from "./mainHeader.module.scss";
import { MainPath } from "../../services/route/route";

export default function MainHeader() {
	const renderNavigationElements = () => {
		return (
			<>
				<Link className={styles.navigationLink} href={MainPath.Main}>
					<p className={styles.navigationLink__text}>Главная</p>
				</Link>
				<Link className={styles.navigationLink} href={MainPath.Search}>
					<p className={styles.navigationLink__text}>Поиск</p>
				</Link>
				<Link className={styles.navigationLink} href={MainPath.Addresses}>
					<p className={styles.navigationLink__text}>Адреса</p>
				</Link>
				<Link className={styles.navigationLink} href={MainPath.About}>
					<p className={styles.navigationLink__text}>О приложении</p>
				</Link>
			</>
		);
	};
	return (
		<header className={styles.headerWrap}>
			<div className={styles.headerContainer}>
				<nav className={styles.navigationWrap}>{renderNavigationElements()}</nav>
			</div>
		</header>
	);
}
