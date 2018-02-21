package com.wha.springmvc.model;

import java.util.ArrayList;
import java.util.Date;

public class CompteCourant extends Compte {
	
	static private float tauxAgios;
	
	private float decouvertAutorise = 0;
	private float agios = 0;
	
	
	//constructeur
	public CompteCourant() {
		
	}
	
	public CompteCourant(String iBAN, float solde, Date dateCreation, ArrayList<Operation> operations, float decouvertAutorise) {
		super( iBAN, solde,  dateCreation, operations);
		this.decouvertAutorise = decouvertAutorise;
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
