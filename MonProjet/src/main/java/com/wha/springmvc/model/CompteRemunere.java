package com.wha.springmvc.model;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("COMPTE_REMUNERE")
public class CompteRemunere extends Compte {
	
	static private float taux = 2f; //taux d'intérêts fixé à 2%
	private float interets = 0;
	
	
	//construteur
	public CompteRemunere() {
	}
	
	public CompteRemunere(float solde, Date dateCreation, ArrayList<Operation> operations, float interets) {
		super(solde, dateCreation, operations);
		this.interets = interets;
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
