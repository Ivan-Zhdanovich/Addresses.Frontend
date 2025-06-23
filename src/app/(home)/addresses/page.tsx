"use client";

import { useRouter } from "next/navigation";
import { Key, useCallback, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { GetAllAddresses } from "@/services/api/GetAllAddresses";
import { MainPath } from "@/app/services/route/route";
import { IAddressCard } from "../../types/common/ComponentProps";
import { AddressCard } from "../../components/addressCard/addressCard";

import styles from "./addressesPage.module.scss";
import { DeleteAddressById } from "@/services/api/DeleteAddressById";

export default function Addresses() {
	const [addresses, setAddresses] = useState<IAddressCard[]>([]);
	const [isAddressDeleted, setAddressIsDeleted] = useState<boolean>(false);

	const router = useRouter();
	const baseUrl = "https://localhost:7047";
	const interval = 5000;

	const RemoveAddress = async (id: number) => {
		try {
			if (baseUrl && id !== null) {
				const response: AxiosResponse<IAddressCard> = await DeleteAddressById(baseUrl, id);

				if (response !== null && response.status === axios.HttpStatusCode.NoContent) {
					setAddressIsDeleted(true);
					setTimeout(() => setAddressIsDeleted(false), interval);
				}
			}
		} catch (error) {
			if (
				axios.isAxiosError(error) &&
				error.response &&
				error.response.status &&
				error.response.status === axios.HttpStatusCode.InternalServerError
			) {
				router.push(MainPath.ServerError);
			}
			console.log(error);
		}
	};

	const getAddresses = useCallback(async () => {
		try {
			if (baseUrl) {
				const response: AxiosResponse<IAddressCard[]> = await GetAllAddresses(baseUrl);
				if (response !== null && response.status === axios.HttpStatusCode.Ok) {
					setAddresses(response.data);
				}
			}
		} catch (error) {
			if (
				axios.isAxiosError(error) &&
				error.response &&
				error.response.status &&
				error.response.status === axios.HttpStatusCode.InternalServerError
			) {
				router.push(MainPath.ServerError);
			}
		}
	}, [baseUrl, router]);

	useEffect(() => {
		getAddresses();
		if (isAddressDeleted) {
			getAddresses();
		}
	}, [getAddresses, isAddressDeleted]);

	return (
		<div className={styles.addressesWrap}>
			<div className={styles.addressesContainer}>
				<h1 className={styles.addressesContainer__title}>Все адреса</h1>
				<div className={styles.addressesDataContainer}>
					<div className={styles.addressesDataColumnsTitleWrapper}>
						<p className={styles.addressesDataColumnsTitle}>id</p>
						<p className={styles.addressesDataColumnsTitle}>Республика</p>
						<p className={styles.addressesDataColumnsTitle}>Область</p>
						<p className={styles.addressesDataColumnsTitle}>Город</p>
						<p className={styles.addressesDataColumnsTitle}>Улица</p>
						<p className={styles.addressesDataColumnsTitle}>Дом</p>
						<p className={styles.addressesDataColumnsTitle}>Комната</p>
					</div>
					{addresses &&
						addresses.map((addressData: IAddressCard, index: Key) => (
							<ol className={styles.addressData} key={index}>
								<AddressCard
									id={addressData.id}
									republic={addressData.republic}
									region={addressData.region}
									city={addressData.city}
									street={addressData.street}
									house={addressData.house}
									room={addressData.room}
									isActive={addressData.isActive}
									onDeleteClick={() => RemoveAddress(addressData.id!)}
								/>
							</ol>
						))}
					{isAddressDeleted && <p>Адрес успешно удалён</p>}
				</div>
			</div>
		</div>
	);
}
