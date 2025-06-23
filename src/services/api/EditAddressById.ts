import axios from "axios";
import { addressesEndPoint } from "./apiConstants";
import { IEditRoomForm } from "@/app/types/common/ComponentProps";

export const EditAddressById = async (baseUrl: string, id: number, data: IEditRoomForm) => {
	return await axios(`${baseUrl}/${addressesEndPoint}/${id}`, {
		method: "PATCH",
		data: data,
		headers: {
			"Content-Type": "application/json",
		},
	});
};
