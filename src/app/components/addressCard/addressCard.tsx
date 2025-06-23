import { IAddressCard } from "../../types/common/ComponentProps";

import styles from "./addressCard.module.scss";

export const AddressCard = ({ id, republic, region, city, street, house, room, onDeleteClick }: IAddressCard) => {
	return (
		<div className={styles.addressCardContainer}>
			<p className={styles.addressCardData}>{id}</p>
			<p className={styles.addressCardData}>{republic}</p>
			<p className={styles.addressCardData}>{region}</p>
			<p className={styles.addressCardData}>{city}</p>
			<p className={styles.addressCardData}>{street}</p>
			<p className={styles.addressCardData}>{house}</p>
			<p className={styles.addressCardData}>{room}</p>
			<button className={styles.removeButton} type="button" onClick={() => onDeleteClick!(id!)}>
				&#10006;
			</button>
		</div>
	);
};
