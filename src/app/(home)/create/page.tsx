"use client";

import { Controller, useForm } from "react-hook-form";
import { InputTypeList } from "@/app/services/input/input";
import { ICreateForm } from "@/app/types/common/PagesProps";
import { IAddressCard } from "@/app/types/common/ComponentProps";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MainPath } from "@/app/services/route/route";
import { CreateAddress } from "@/services/api/CreateAddress";

import styles from "./createPage.module.scss";

export default function Create() {
	const {
		formState: {},
		control,
		handleSubmit,
	} = useForm<ICreateForm>({
		defaultValues: {
			address: "",
		},
	});

	const [isNewAddress, setIsNewAddress] = useState<boolean>(false);

	const baseUrl = "https://localhost:7047";
	const router = useRouter();

	const onSubmit = async (data: ICreateForm) => {
		const addressArray = data.address.split(",").map((element) => element.trim());
		const region = addressArray[1].split(" ")[0];
		const city = addressArray[2].split(" ")[1];
		const streetArray = addressArray[3].split(" ");
		const street = streetArray.length > 2 ? streetArray[1] + " " + streetArray[2] : streetArray[1];
		const houseArray = addressArray[4].split(" ");
		const house = houseArray.length > 2 ? houseArray[0] : houseArray[1];
		const room = addressArray[5] ? addressArray[5].split(" ")[1] : houseArray[2];

		const address = {
			republic: "Республика Беларусь",
			region: region,
			city: city,
			street: street,
			house: house,
			room: room,
			isActive: true,
		};

		const interval = 5000;

		try {
			if (baseUrl && data !== null) {
				console.log(address);
				const response: AxiosResponse<IAddressCard> = await CreateAddress(baseUrl, address);

				if (response !== null && response.status === axios.HttpStatusCode.Created) {
					setIsNewAddress(true);
					setTimeout(() => setIsNewAddress(false), interval);
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
		<div className={styles.createPageWrap}>
			<div className={styles.createPageContainer}>
				<form className={styles.createFormWrap} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.createFormContainer}>
						<div className={styles.inputWrap}>
							<label>адрес</label>
							<Controller
								name="address"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<input className={styles.input} id="id" type={InputTypeList.Text} placeholder="Адрес" {...field} />
								)}
							/>
						</div>
						<button className={styles.createButton}>Создать адрес</button>
					</div>
				</form>
				<div className={styles.responseContainer}>
					{isNewAddress && <h2 className={styles.responseTitle}>Адрес успешно создан</h2>}
				</div>
			</div>
		</div>
	);
}
