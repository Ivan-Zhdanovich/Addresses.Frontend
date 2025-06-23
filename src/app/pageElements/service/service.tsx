import Image from "next/image";
import mailbox from "../../../assets/pages/mainPage/mailBox.png";
import styles from "./service.module.scss";

export default function Service() {
	return (
		<div className={styles.mainPageWrap}>
			<div className={styles.mainPageContainer}>
				<div className={styles.mainTitleWrap}>
					<h1>Ваш почтовый адрес - дальше мы сами.</h1>
					<p className={styles.subTitle}>Спасибо, что выбрали нас. Сохраняем лучшие традиции.</p>
				</div>
				<Image className={styles.mainPicture} src={mailbox} alt={"почтовый ящик"} priority={true} />
			</div>
		</div>
	);
}
