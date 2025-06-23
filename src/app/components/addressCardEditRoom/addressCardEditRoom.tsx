import { Controller, useForm } from "react-hook-form";

import styles from "./addressCardEditRoom.module.scss";
import { InputTypeList } from "@/app/services/input/input";
import { IAddressCardEditRoom, IEditRoomForm } from "@/app/types/common/ComponentProps";

export const AddressCardEditRoom = ({ id, request, open }: IAddressCardEditRoom) => {
	const {
		formState: {},
		control,
		handleSubmit,
	} = useForm<IEditRoomForm>({
		defaultValues: {
			room: "",
		},
	});
	const onSubmit = async (data: IEditRoomForm) => {
		await request(id, data);
	};

	return (
		<dialog open={open} className={styles.backgroundModal}>
			<div onClick={(e) => e.stopPropagation()} role="textbox" className={styles.modalContainer}>
				<form className={styles.editRoomFormWrap} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.editRoomFormContainer}>
						<div className={styles.inputWrap}>
							<label>Кабинет</label>
							<Controller
								name="room"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<input className={styles.input} id="room" type={InputTypeList.Text} placeholder="Id" {...field} />
								)}
							/>
						</div>
						<button className={styles.editButton} type="submit">
							Изменить номер кабинета
						</button>
					</div>
				</form>
			</div>
		</dialog>
	);
};
