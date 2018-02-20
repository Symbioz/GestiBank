package com.wha.springmvc.model;

import java.util.ArrayList;
import java.util.Date;

public class CompteRemunere extends Compte {
	
	static private float taux = 2f; //taux d'int�r�ts fix� � 2%
	private float interets;
	
	
	//construteur
	public CompteRemunere() {
		super();
	}
	public CompteRemunere(String iBAN, long idClient, float solde, Date dateCreation, ArrayList<Operation> operations) {
		super( iBAN, idClient,  solde,  dateCreation, operations);
	}

	//getters-setters
	public static float getTaux() {
		return taux;
	}
	public static void setTaux(float taux) {
		CompteRemunere.taux = taux;
	}

	public float getInterets() {
		return interets;
	}
	public void setInterets(float interets) {
		this.interets = interets;
	}
	
	
}
