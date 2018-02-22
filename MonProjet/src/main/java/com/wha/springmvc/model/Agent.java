package com.wha.springmvc.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;


@Entity
@DiscriminatorValue("AGENT")
public class Agent extends Utilisateur {
    
	@Column(unique=true)
	private String matricule;
	private Date dateDebutContrat;
	
	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.EAGER)
	@JoinColumn(name="id_agent")
	private List<Client> clients;
    
	
	//Constructeurs
    
	
	public List<Client> getClients() {
		return clients;
	}


	public void setClients(List<Client> clients) {
		this.clients = clients;
	}


	public Agent() {
		super();
	}

	
	public Agent(String nom, String prenom, String identifiant,
			String mdp, String email, String adresse, String numtel) {
		super(nom, prenom, identifiant, mdp, email, adresse,numtel);
		// TODO Auto-generated constructor stub
	}

	public Agent(String nom, String prenom, String identifiant,
			String mdp, String email, String adresse,String numtel, String matricule,
			Date dateDebutContrat) {
		super(nom, prenom, identifiant, mdp, email, adresse,numtel);
		this.matricule = matricule;
		this.dateDebutContrat = dateDebutContrat;
		
	}
	

	//Getters-Setters
	public String getMatricule() {
		return matricule;
	}
	
	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}
	public Date getDateDebutContrat() {
		return dateDebutContrat;
	}
	public void setDateDebutContrat(Date dateDebutContrat) {
		this.dateDebutContrat = dateDebutContrat;
	}
	
	
	
	
	
}