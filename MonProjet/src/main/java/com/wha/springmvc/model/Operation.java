package com.wha.springmvc.model;

import java.util.Date;

public class Operation {
	
	private long id; // correspond � la cl� primaire 
	private float montant;
	private Date date;
	private String type;
	private String libelle;
	private String iBAN; // cl� �trang�re
	
	
	//Constructeurs
	public Operation() {
		super();
	}

	public Operation(long id, float montant, Date date, String type, String libelle, String iBAN) {
		super();
		this.id = id;
		this.montant = montant;
		this.date = date;
		this.type = type;
		this.libelle = libelle;
		this.iBAN = iBAN;
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

	public String getiBAN() {
		return iBAN;
	}
	public void setiBAN(String iBAN) {
		this.iBAN = iBAN;
	}
	
	
	
}
