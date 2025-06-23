"use client";

import { Controller, useForm } from "react-hook-form";
import { InputTypeList } from "@/app/services/input/input";
import { ISearchByIdForm } from "@/app/types/common/PagesProps";
import { IAddressCard } from "@/app/types/common/ComponentProps";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GetAddressById } from "@/services/api/GetAddressById";
import { MainPath } from "@/app/services/route/route";
import { AddressCard } from "@/app/components/addressCard/addressCard";
import styles from "./searchPage.module.scss";

export default function Search() {
	const {
		formState: {},
		control,
		handleSubmit,
	} = useForm<ISearchByIdForm>({
		defaultValues: {
			id: 0,
		},
	});

	const [addressById, setAddressById] = useState<IAddressCard | null>(null);

	const baseUrl = "https://localhost:7047";
	const router = useRouter();

	const onSubmit = async (data: ISearchByIdForm) => {
		try {
			if (baseUrl && data !== null) {
				const response: AxiosResponse<IAddressCard> = await GetAddressById(baseUrl, data);

				if (response !== null && response.status === axios.HttpStatusCode.Ok) {
					setAddressById(response.data);
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

	return (
		<div className={styles.searchPageWrap}>
			<div className={styles.searchPageContainer}>
				<form className={styles.searchFormWrap} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.searchFormContainer}>
						<div className={styles.inputWrap}>
							<label>идентификатор</label>
							<Controller
								name="id"
								control={control}
								defaultValue={0}
								render={({ field }) => (
									<input className={styles.input} id="id" type={InputTypeList.Text} placeholder="Id" {...field} />
								)}
							/>
						</div>
						<button className={styles.searchButton} type="submit">
							Найти адрес по Id
						</button>
					</div>
				</form>
				<div className={styles.addressDataWrapper}>
					<h2 className={styles.addressDataTitle}>Поиск адреса по идентификатору</h2>
					{addressById && (
						<AddressCard
							id={addressById.id}
							republic={addressById.republic}
							region={addressById.region}
							city={addressById.city}
							street={addressById.street}
							house={addressById.house}
							room={addressById.room}
							isActive={addressById.isActive}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
