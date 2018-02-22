package com.wha.springmvc.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
	private Set<Operation> operations = new HashSet<Operation>();
	
	
	//Constructeurs
	public Compte() {
		
	}
	
	public Compte(float solde, Date dateCreation, HashSet<Operation> operations) {
		super();
		this.solde = solde;
		this.dateCreation = dateCreation;
		this.operations = operations;
	}


	//Getters-Setters
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

	public Set<Operation> getOperations() {
		return operations;
	}
	public void setOperations(HashSet<Operation> operations) {
		this.operations = operations;
	}

	
}
