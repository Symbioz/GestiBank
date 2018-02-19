export class Notification {

	public id: number;
	status: string;
	message: string;
	date: Date;

	constructor(id: number, status: string, message: string, date: Date){
		this.id = id;
		this.status = status;
		this.message = message;
		this.date = date;
	}


}