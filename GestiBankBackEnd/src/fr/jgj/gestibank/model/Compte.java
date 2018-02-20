package fr.jgj.gestibank.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Compte {

	private String IBAN;
	private int idClient;
	private float solde;
	private Date dateCreation;
	private List<Operation> operations;

	// Constructeurs
	public Compte() {

	}

	public Compte(String iBAN, int idClient, float solde, Date dateCreation,
			ArrayList<Operation> operations) {
		super();
		IBAN = iBAN;
		this.solde = solde;
		this.dateCreation = dateCreation;
		this.operations = operations;
		this.idClient = idClient;
	}

	// Getters-Setters
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

	public List<Operation> getOperations() {
		return operations;
	}

	public void setOperations(List<Operation> operations) {
		this.operations = operations;
	}

	public int getIdClient() {
		return idClient;
	}

	public void setIdClient(int idClient) {
		this.idClient = idClient;
	}

}
