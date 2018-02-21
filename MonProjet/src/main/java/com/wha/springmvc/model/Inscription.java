package com.wha.springmvc.model;

import java.util.Date;

public class Inscription extends Demande {
    
	private Date dateAffectation;
     
	// Constructeurs
	public Inscription() {
		
	}

	public Inscription(long idClient, Date date,
			boolean status, Date dateAffectation) {
		super(idClient, date, status);
		this.dateAffectation = dateAffectation;
	}

	//Getter et setter
	public Date getDateAffectation() {
		return dateAffectation;
	}

	public void setDateAffectation(Date dateAffectation) {
		this.dateAffectation = dateAffectation;
	}
	
}