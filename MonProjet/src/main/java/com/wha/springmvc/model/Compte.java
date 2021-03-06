package com.wha.springmvc.model;

<<<<<<< HEAD
import java.util.ArrayList;
import java.util.Date;

public class Compte {
	
	private String IBAN; 
	private long idClient;
	private float solde;
	private Date dateCreation;
	private ArrayList<Operation> operations;
=======
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
//@Table(name="COMPTE")
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="TYPE_COMPTE")
@DiscriminatorValue("COMPTE")
public class Compte implements Serializable {
	
	@Id
	private String IBAN; 
	
	private float solde;
	private Date dateCreation;
	
	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.EAGER)
	@JoinColumn(name="iBAN")
	private List<Operation> operations;
	
>>>>>>> Guillaume
	
	//Constructeurs
	public Compte() {
		
	}
	
<<<<<<< HEAD
	public Compte(String iBAN, long idClient, float solde, Date dateCreation, ArrayList<Operation> operations) {
		super();
		IBAN = iBAN;
		this.solde = solde;
		this.dateCreation = dateCreation;
		this.operations = operations;
		this.idClient = idClient;
=======
	public Compte(float solde, Date dateCreation, ArrayList<Operation> operations) {
		super();
		this.solde = solde;
		this.dateCreation = dateCreation;
		this.operations = operations;
>>>>>>> Guillaume
	}


	//Getters-Setters
<<<<<<< HEAD
	public String getIBAN() {
		return IBAN;
	}
	public void setIBAN(String iBAN) {
		IBAN = iBAN;
	}

=======
>>>>>>> Guillaume
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

<<<<<<< HEAD
	public ArrayList<Operation> getOperations() {
=======
	public List<Operation> getOperations() {
>>>>>>> Guillaume
		return operations;
	}
	public void setOperations(ArrayList<Operation> operations) {
		this.operations = operations;
	}

<<<<<<< HEAD
	public Long getIdClient() {
		return idClient;
	}
	public void setIdClient(Long idClient) {
		this.idClient = idClient;
	}
=======
>>>>>>> Guillaume
	
}
