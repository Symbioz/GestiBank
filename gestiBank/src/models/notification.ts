export class Notification {

	public id: number;
	idClient: number
	status: string;
	message: string;
	date: Date;

	constructor(id: number, idClient: number, status: string, message: string, date: Date){
		this.id = id;
		this.idClient = idClient;
		this.status = status;
		this.message = message;
		this.date = date;
	}


}