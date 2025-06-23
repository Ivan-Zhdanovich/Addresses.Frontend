export interface IAddressCard {
	id: number | null;
	republic: string;
	region: string;
	city: string;
	street: string;
	house: string;
	room: string;
	isActive: boolean;
	onDeleteClick?: () => Promise<void>;
	onEditClick?: () => [void, void];
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

export interface IEditRoomForm {
	room: string;
}

export interface IAddressCardEditRoom {
	id: number;
	request: (id: number, data: IEditRoomForm) => Promise<void>;
	open: boolean;
}
