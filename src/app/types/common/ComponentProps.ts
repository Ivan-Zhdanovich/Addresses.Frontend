export interface IAddressCard {
	id: number | null;
	republic: string;
	region: string;
	city: string;
	street: string;
	house: string;
	room: string;
	isActive: boolean;
}

export interface IAddressCreate {
	republic: string;
	region: string;
	city: string;
	street: string;
	house: string;
	room: string;
	isActive: boolean;
}
