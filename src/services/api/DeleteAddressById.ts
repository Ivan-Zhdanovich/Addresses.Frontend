import axios from "axios";
import { addressesEndPoint } from "./apiConstants";

export const DeleteAddressById = async (baseUrl: string, id: number) => {
	return await axios(`${baseUrl}/${addressesEndPoint}/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
};
