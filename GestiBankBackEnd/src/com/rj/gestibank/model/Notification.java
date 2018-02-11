package com.rj.gestibank.model;

import java.util.Date;

public class Notification {
	
	private Long id;
	private String message;
	private Date date;
	
	//Constructeurs
	public Notification() {
		super();
	}

	public Notification(Long id, String message, Date date) {
		super();
		this.id = id;
		this.message = message;
		this.date = date;
	}

	//getters-setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
