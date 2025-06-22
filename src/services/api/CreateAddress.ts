import axios from "axios";
import { addressesEndPoint } from "./apiConstants";
import { IAddressCreate } from "@/app/types/common/ComponentProps";

export const CreateAddress = async (baseUrl: string, address: IAddressCreate) => {
	return await axios(`${baseUrl}/${addressesEndPoint}`, {
		method: "POST",
		data: address,
		headers: {
			"Content-Type": "application/json",
		},
	});
};
