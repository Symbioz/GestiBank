package fr.jgj.gestibank.model;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class Client extends Utilisateur{

	private int nbEnfants;
	private String situation;
	private List<Compte> comptes=new ArrayList<Compte>();
	private List<File> documents = new ArrayList<File>();
	private List<Notification> notifications = new ArrayList<Notification>();
	private String matriculeAgent;
	
	public Client() {
	
	}
	public Client(
			int id,
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
	public List<Compte> getComptes() {
		return comptes;
	}
	public void setComptes(List<Compte> comptes) {
		this.comptes = comptes;
	}
	public List<File> getDocuments() {
		return documents;
	}
	public void setDocuments(List<File> documents) {
		this.documents = documents;
	}
	public List<Notification> getNotifications() {
		return notifications;
	}
	public void setNotifications(List<Notification> notifications) {
		this.notifications = notifications;
	}
	public String getMatriculeAgent() {
		return matriculeAgent;
	}
	public void setMatriculeAgent(String matriculeAgent) {
		this.matriculeAgent = matriculeAgent;
	}

}