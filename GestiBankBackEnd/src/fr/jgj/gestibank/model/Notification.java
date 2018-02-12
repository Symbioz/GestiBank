package fr.jgj.gestibank.model;

public class Notification {
	
	private Long id;
	private String message;
	private String date;
	
	//Constructeurs
	public Notification() {
		super();
	}

	public Notification(Long id, String message, String date) {
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

	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}

	
	
}
