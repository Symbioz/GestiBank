package fr.jgj.gestibank.model;

import java.util.ArrayList;
import java.util.Date;

public class CompteCourant extends Compte {
	
	static private float tauxAgios;
	
	private float decouvertAutorise;
	private float agios;
	
	
	//constructeur
	public CompteCourant() {
		super();
	}
	
	public CompteCourant(String iBAN, long idClient, float solde, Date dateCreation, ArrayList<Operation> operations, float decouvertAutorise) {
		super( iBAN, idClient,  solde,  dateCreation, operations);
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
