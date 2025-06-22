import Image from "next/image";
import mailbox from "../../../assets/pages/mainPage/mailBox.png";
import styles from "./service.module.scss";

export default function Service() {
	return (
		<div>
			<h1>Ваш почтовый адрес - дальше мы сами.</h1>
			<Image src={mailbox} alt={"почтовый ящик"} />
		</div>
	);
}
