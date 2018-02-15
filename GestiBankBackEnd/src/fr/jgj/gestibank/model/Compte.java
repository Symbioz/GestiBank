package fr.jgj.gestibank.model;

import java.util.ArrayList;
import java.util.Date;

public class Compte {
	
	private long IBAN; 
	private float solde;
	private Date dateCreation;
	private ArrayList<Operation> operations;
	
	//Constructeurs
	public Compte() {
		
	}
	
	public Compte(long iBAN, float solde, Date dateCreation, ArrayList<Operation> operations) {
		super();
		IBAN = iBAN;
		this.solde = solde;
		this.dateCreation = dateCreation;
		this.operations = operations;
	}


	//Getters-Setters
	public long getIBAN() {
		return IBAN;
	}
	public void setIBAN(long iBAN) {
		IBAN = iBAN;
	}

	public float getSolde() {
		return solde;
	}
	public void setSolde(float solde) {
		this.solde = solde;
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
