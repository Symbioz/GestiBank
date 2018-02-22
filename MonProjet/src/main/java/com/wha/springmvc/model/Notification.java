package com.wha.springmvc.model;

<<<<<<< HEAD
import java.util.Date;

public class Notification {
	
=======
import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name="NOTIFICATION")
public class Notification implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
>>>>>>> Guillaume
	private Long id;
	private String status;
	private String message;
	private Date date;
	
	//Constructeurs
	public Notification() {
<<<<<<< HEAD
		super();
	}

	public Notification(Long id, String status, String message, Date date) {
		super();
		this.id = id;
=======
		
	}

	public Notification(String status, String message, Date date) {
>>>>>>> Guillaume
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

	
<<<<<<< HEAD
	
=======
>>>>>>> Guillaume
}
