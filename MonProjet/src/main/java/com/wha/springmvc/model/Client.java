package com.wha.springmvc.model;

<<<<<<< HEAD
import java.io.File;
import java.util.ArrayList;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
=======
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
>>>>>>> Guillaume


@Entity
@DiscriminatorValue("CLIENT")
<<<<<<< HEAD
public class Client extends Utilisateur{
	
	private int nbEnfants;
	private String situation;
	private ArrayList<Compte> comptes=new ArrayList<Compte>();
	private ArrayList<File> documents = new ArrayList<File>();
	private ArrayList<Notification> notifications = new ArrayList<Notification>();
	private String matriculeAgent;
	
=======
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
>>>>>>> Guillaume
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
<<<<<<< HEAD
			ArrayList<Compte> comptes,
			ArrayList<File> documents,
			ArrayList<Notification> notifications,
=======
			List<Compte> comptes,
			//List<File> documents,
			List<Notification> notifications,
>>>>>>> Guillaume
			String matriculeAgent) {
		
		super(id, nom, prenom, mdp, email, adresse, identifiant,numTel);
		this.nbEnfants = nbEnfants;
		this.situation = situation;
		this.comptes = comptes;
<<<<<<< HEAD
		this.documents = documents;
=======
		///this.documents = documents;
>>>>>>> Guillaume
		this.notifications = notifications;
		this.matriculeAgent = matriculeAgent;
	}
	
<<<<<<< HEAD
=======
	//Getters-setters
>>>>>>> Guillaume
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
<<<<<<< HEAD
	public ArrayList<Compte> getComptes() {
=======
	public List<Compte> getComptes() {
>>>>>>> Guillaume
		return comptes;
	}
	public void setComptes(ArrayList<Compte> comptes) {
		this.comptes = comptes;
	}
<<<<<<< HEAD
	public ArrayList<File> getDocuments() {
		return documents;
	}
	public void setDocuments(ArrayList<File> documents) {
		this.documents = documents;
	}
	public ArrayList<Notification> getNotifications() {
=======
//	public List<File> getDocuments() {
//		return documents;
//	}
//	public void setDocuments(ArrayList<File> documents) {
//		this.documents = documents;
//	}
	public List<Notification> getNotifications() {
>>>>>>> Guillaume
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
<<<<<<< HEAD

=======
	public List<Demande> getDemandes() {
		return demandes;
	}
	public void setDemandes(ArrayList<Demande> demandes) {
		this.demandes = demandes;
	}
>>>>>>> Guillaume
}