package fr.jgj.gestibank.model;

import java.util.Date;

public class Notification {
	private static int idImpl=1;
	private int id;
	private String status;
	private String message;
	private Date date;
	
	//Constructeurs
	public Notification() {
		this.idImpl++;
	}

	public Notification(int id, String status, String message, Date date) {
		this.idImpl++;
		this.id = id;
		this.status = status;
		this.message = message;
		this.date = date;
	}
	public Notification( String status, String message, Date date) {
		this.id=idImpl;
		this.status = status;
		this.message = message;
		this.date = date;
	}
	//getters-setters
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}

	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}

	
	
}
