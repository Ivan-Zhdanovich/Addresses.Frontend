import axios from "axios";
import { addressesEndPoint } from "./apiConstants";

export const GetAllAddresses = async (baseUrl: string) => {
	return await axios(`${baseUrl}/${addressesEndPoint}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
};
