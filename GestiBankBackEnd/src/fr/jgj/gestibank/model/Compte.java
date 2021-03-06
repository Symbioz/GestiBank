package fr.jgj.gestibank.model;

import java.util.ArrayList;
import java.util.Date;

public class Compte {
	
	private String IBAN; 
	private long idClient;
	private float solde;
	private Date dateCreation;
	private ArrayList<Operation> operations;
	
	//Constructeurs
	public Compte() {
		
	}
	
	public Compte(String iBAN, long idClient, float solde, Date dateCreation, ArrayList<Operation> operations) {
		super();
		IBAN = iBAN;
		this.solde = solde;
		this.dateCreation = dateCreation;
		this.operations = operations;
		this.idClient = idClient;
	}


	//Getters-Setters
	public String getIBAN() {
		return IBAN;
	}
	public void setIBAN(String iBAN) {
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

	public Long getIdClient() {
		return idClient;
	}
	public void setIdClient(Long idClient) {
		this.idClient = idClient;
	}
	
}
