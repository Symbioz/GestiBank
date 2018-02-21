package com.wha.springmvc.model;

import java.io.File;
import java.util.ArrayList;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;


@Entity
@DiscriminatorValue("CLIENT")
public class Client extends Utilisateur{
	
	private int nbEnfants;
	private String situation;
	private ArrayList<Compte> comptes=new ArrayList<Compte>();
	private ArrayList<File> documents = new ArrayList<File>();
	private ArrayList<Notification> notifications = new ArrayList<Notification>();
	private String matriculeAgent;
	
	public Client() {
	
	}
	public Client(
			long id,
			String nom,
			String prenom, 
			String mdp, 
			String email,
			String adresse, 
			String identifiant, 
			String numTel,
			int nbEnfants, 
			String situation,
			ArrayList<Compte> comptes,
			ArrayList<File> documents,
			ArrayList<Notification> notifications,
			String matriculeAgent) {
		
		super(id, nom, prenom, mdp, email, adresse, identifiant,numTel);
		this.nbEnfants = nbEnfants;
		this.situation = situation;
		this.comptes = comptes;
		this.documents = documents;
		this.notifications = notifications;
		this.matriculeAgent = matriculeAgent;
	}
	
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
	public ArrayList<Compte> getComptes() {
		return comptes;
	}
	public void setComptes(ArrayList<Compte> comptes) {
		this.comptes = comptes;
	}
	public ArrayList<File> getDocuments() {
		return documents;
	}
	public void setDocuments(ArrayList<File> documents) {
		this.documents = documents;
	}
	public ArrayList<Notification> getNotifications() {
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

}