package fr.jgj.gestibank.model;

import java.util.Date;

public class Inscription extends Demande {
    
	private Date dateAffectation;
     
	// Constructeur

	public Inscription(Long identifiant, Client client, Date date,
			boolean status, Date dateAffectation) {
		super(identifiant, client, date, status);
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
