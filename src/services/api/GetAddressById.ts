import axios from "axios";
import { addressesEndPoint } from "./apiConstants";
import { ISearchByIdForm } from "@/app/types/common/PagesProps";

export const GetAddressById = async (baseUrl: string, data: ISearchByIdForm) => {
	return await axios(`${baseUrl}/${addressesEndPoint}/${data.id}`, {
		method: "GET",
		data: data.id,
		headers: {
			"Content-Type": "application/json",
		},
	});
};
