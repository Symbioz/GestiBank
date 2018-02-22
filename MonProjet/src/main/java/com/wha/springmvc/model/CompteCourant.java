package com.wha.springmvc.model;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;


@Entity
@DiscriminatorValue("COMPTE_COURANT")
public class CompteCourant extends Compte {
	
	static private float tauxAgios;
	
	private float decouvertAutorise = 0;
	private float agios = 0;
	
	
	//constructeur
	public CompteCourant() {
		
	}
	
	public CompteCourant(float solde, Date dateCreation, ArrayList<Operation> operations, float decouvertAutorise) {
		super(solde, dateCreation, operations);
		this.decouvertAutorise = decouvertAutorise;
	}
	public CompteCourant(float solde, Date dateCreation, ArrayList<Operation> operations, float decouvertAutorise, float agios) {
		super(solde, dateCreation, operations);
		this.decouvertAutorise = decouvertAutorise;
		this.agios = agios;
	}
	

	//getters-setters
	public static float getTauxAgios() {
		return tauxAgios;
	}
	public static void setTauxAgios(float tauxAgios) {
		CompteCourant.tauxAgios = tauxAgios;
	}
	public float getDecouvertAutorise() {
		return decouvertAutorise;
	}
	public void setDecouvertAutorise(float decouvertAutorise) {
		this.decouvertAutorise = decouvertAutorise;
	}
	public float getAgios() {
		return agios;
	}
	public void setAgios(float agios) {
		this.agios = agios;
	}
	
}
