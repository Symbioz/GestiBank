package com.gestibank.model;

import java.util.ArrayList;
import java.util.Date;

public class Compte {
	
	private long RIB;
	private float solde = 0;
	private float decouvertAutorise = 0;
	private float agios = 0;
	private Date dateCreation;
	private ArrayList<Operation> operations;
	
	//Constructeurs
	public Compte() {
		super();
	}
	public Compte(long rIB) {
		super();
		RIB = rIB;
	}
	
	//Getters-Setters
	public long getRIB() {
		return RIB;
	}
	public float getSolde() {
		return solde;
	}
	public void setSolde(float solde) {
		this.solde = solde;
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
	public Date getDateCreation() {
		return dateCreation;
	}
	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}
	public ArrayList<Operation> getOperations() {
		return operations;
	}
	public void setOperations(ArrayList<Operation> operations) {
		this.operations = operations;
	}
	
	
}
