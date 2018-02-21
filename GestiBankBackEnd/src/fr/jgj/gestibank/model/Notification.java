package fr.jgj.gestibank.model;

import java.util.Date;

public class Notification {
	private static Long idImpl=1L;
	private Long id;
	private String status;
	private String message;
	private Date date;
	
	//Constructeurs
	public Notification() {
		this.idImpl++;
	}

	public Notification(Long id, String status, String message, Date date) {
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
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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

	public static Long getIdImpl() {
		return idImpl;
	}

	public static void setIdImpl(Long idImpl) {
		Notification.idImpl = idImpl;
	}

	
	
}
