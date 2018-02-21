package com.wha.springmvc.model;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="COMPTE")
public class Compte {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String IBAN; 
	
	private float solde;
	private Date dateCreation;
	private ArrayList<Operation> operations;
	
	
	//Constructeurs
	public Compte() {
		
	}
	
	public Compte(String iBAN, float solde, Date dateCreation, ArrayList<Operation> operations) {
		super();
		IBAN = iBAN;
		this.solde = solde;
		this.dateCreation = dateCreation;
		this.operations = operations;
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

	
}
