package fr.jgj.gestibank.model;

import java.io.Serializable;

public class Utilisateur implements Serializable{
	
	static long nextId = 3;
    

	//@Id
	private long id = 0;
	private String nom;
	private String prenom;
	private String mdp;
	private String email;
	private String adresse;
	private String identifiant;
	private String numTel;
	
	//Constructeurs
	public Utilisateur() {
		super();
	}
	public Utilisateur(long id, String nom, String prenom, String mdp, String email,
			String adresse, String identifiant, String numTel) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.mdp = mdp;
		this.email = email;
		this.adresse = adresse;
		this.identifiant = identifiant;
		this.numTel = numTel;
	}

	
	//Getters-Setters
	public long getId() {
		if (id == 0){
			id = nextId++;
		}
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getMdp() {
		return mdp;
	}
	public void setMdp(String mdp) {
		this.mdp = mdp;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getIdentifiant() {
		return identifiant;
	}
	public void setIdentifiant(String identifiant) {
		this.identifiant = identifiant;
	}
	public String getNumTel() {
		return numTel;
	}
	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}

}
