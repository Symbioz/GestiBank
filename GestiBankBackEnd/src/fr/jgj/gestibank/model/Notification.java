package fr.jgj.gestibank.model;

import java.util.Date;

public class Notification {
	
	private long id;
	private long idClient;
	private String status;
	private String message;
	private Date date;
	
	//Constructeurs
	public Notification() {
		super();
	}

	public Notification(long id, long idClient, String status, String message, Date date) {
		super();
		this.id = id;
		this.idClient = idClient;
		this.status = status;
		this.message = message;
		this.date = date;
	}

	//getters-setters
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public long getIdClient() {
		return idClient;
	}
	public void setIdClient(long idClient) {
		this.idClient = idClient;
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
