package com.wha.springmvc.model;

<<<<<<< HEAD
import java.util.Date;

public class Operation {
	
	private long id; // correspond � la cl� primaire 
=======
import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="OPERATION")
public class Operation implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id; // PK 
	
>>>>>>> Guillaume
	private float montant;
	private Date date;
	private String type;
	private String libelle;
<<<<<<< HEAD
	private String iBAN; // cl� �trang�re
=======
>>>>>>> Guillaume
	
	
	//Constructeurs
	public Operation() {
		super();
	}
<<<<<<< HEAD

	public Operation(long id, float montant, Date date, String type, String libelle, String iBAN) {
		super();
		this.id = id;
=======
	
	public Operation(float montant, Date date, String type, String libelle) {
		super();
>>>>>>> Guillaume
		this.montant = montant;
		this.date = date;
		this.type = type;
		this.libelle = libelle;
<<<<<<< HEAD
		this.iBAN = iBAN;
=======
>>>>>>> Guillaume
	}
	
	//Getters-Setters
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public float getMontant() {
		return montant;
	}
	public void setMontant(float montant) {
		this.montant = montant;
	}

	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}

	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
<<<<<<< HEAD

	public String getiBAN() {
		return iBAN;
	}
	public void setiBAN(String iBAN) {
		this.iBAN = iBAN;
	}
	
	
=======
>>>>>>> Guillaume
	
}
