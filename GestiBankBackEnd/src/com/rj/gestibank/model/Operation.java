package com.rj.gestibank.model;

import java.util.Date;

public class Operation {
	
	private Long id;
	private float montant;
	private Date date;
	private String type;
	private String libelle;
	
	
	//Constructeurs
	public Operation() {
		super();
	}

	public Operation(float montant, Date date, String type, String libelle) {
		super();
		this.montant = montant;
		this.date = date;
		this.type = type;
		this.libelle = libelle;
	}
	
	//Getters-Setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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
	
	
}
