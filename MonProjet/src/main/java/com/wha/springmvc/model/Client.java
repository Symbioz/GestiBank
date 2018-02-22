package com.wha.springmvc.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;


@Entity
@DiscriminatorValue("CLIENT")
public class Client extends Utilisateur implements Serializable {
	
	//Déclaration des attributs spécifique à la classe client
	private int nbEnfants;
	private String situation;
	private String matriculeAgent;
	
	//Définition des relations avec d'autres existantes de la base
	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.EAGER)
	@JoinColumn(name="idClient")
	private List<Compte> comptes = new ArrayList<Compte>();
	
	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.EAGER)
	@JoinColumn(name="idClient")
	private List<Notification> notifications = new ArrayList<Notification>();
	
	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.EAGER)
	@JoinColumn(name="idClient")
	private List<Demande> demandes = new ArrayList<Demande>();
	
	//TODO
	//private List<File> documents = new ArrayList<File>();
		
		
	
	//Constructeurs
	public Client() {
	
	}
	public Client(
			String nom,
			String prenom, 
			String mdp, 
			String email,
			String adresse, 
			String identifiant, 
			String numTel,
			int nbEnfants, 
			String situation,
			List<Compte> comptes,
			//List<File> documents,
			List<Notification> notifications,
			String matriculeAgent) {
		
		super(nom, prenom, mdp, email, adresse, identifiant,numTel);
		this.nbEnfants = nbEnfants;
		this.situation = situation;
		this.comptes = comptes;
		///this.documents = documents;
		this.notifications = notifications;
		this.matriculeAgent = matriculeAgent;
	}
	
	//Getters-setters
	public int getNbEnfants() {
		return nbEnfants;
	}
	public void setNbEnfants(int nbEnfants) {
		this.nbEnfants = nbEnfants;
	}
	public String getSituation() {
		return situation;
	}
	public void setSituation(String situation) {
		this.situation = situation;
	}
	public List<Compte> getComptes() {
		return comptes;
	}
	public void setComptes(ArrayList<Compte> comptes) {
		this.comptes = comptes;
	}
//	public List<File> getDocuments() {
//		return documents;
//	}
//	public void setDocuments(ArrayList<File> documents) {
//		this.documents = documents;
//	}
	public List<Notification> getNotifications() {
		return notifications;
	}
	public void setNotifications(ArrayList<Notification> notifications) {
		this.notifications = notifications;
	}
	public String getMatriculeAgent() {
		return matriculeAgent;
	}
	public void setMatriculeAgent(String matriculeAgent) {
		this.matriculeAgent = matriculeAgent;
	}
	public List<Demande> getDemandes() {
		return demandes;
	}
	public void setDemandes(ArrayList<Demande> demandes) {
		this.demandes = demandes;
	}
}