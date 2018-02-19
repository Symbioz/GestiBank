export class Notification {
	id: number;
	type: String;
	message: String;

	constructor(id: number, type: String, message: String){
		this.id = id;
		this.type = type;
		this.message = message;
	}


}