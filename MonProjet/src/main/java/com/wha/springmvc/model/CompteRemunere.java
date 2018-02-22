package com.wha.springmvc.model;

import java.util.ArrayList;
import java.util.Date;

<<<<<<< HEAD
public class CompteRemunere extends Compte {
	
	static private float taux = 2f; //taux d'int�r�ts fix� � 2%
=======
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("COMPTE_REMUNERE")
public class CompteRemunere extends Compte {
	
	static private float taux = 2f; //taux d'intérêts fixé à 2%
>>>>>>> Guillaume
	private float interets = 0;
	
	
	//construteur
	public CompteRemunere() {
	}
	
<<<<<<< HEAD
	public CompteRemunere(String iBAN, long idClient, float solde, Date dateCreation, ArrayList<Operation> operations) {
		super( iBAN, idClient,  solde,  dateCreation, operations);
=======
	public CompteRemunere(float solde, Date dateCreation, ArrayList<Operation> operations) {
		super(solde, dateCreation, operations);
>>>>>>> Guillaume
	}

	//getters-setters
	public static float getTaux() {
		return taux;
	}
<<<<<<< HEAD
=======
	
>>>>>>> Guillaume
	public static void setTaux(float taux) {
		CompteRemunere.taux = taux;
	}

	public float getInterets() {
		return interets;
	}
<<<<<<< HEAD
=======
	
>>>>>>> Guillaume
	public void setInterets(float interets) {
		this.interets = interets;
	}
	
	
}
