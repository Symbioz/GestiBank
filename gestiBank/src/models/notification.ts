export class Notification {
	id: number;
	importance: String;
	message: String;

	constructor(id: number, importance: String, message: String){
		this.id = id;
		this.importance = importance;
		this.message = message;
	}


}