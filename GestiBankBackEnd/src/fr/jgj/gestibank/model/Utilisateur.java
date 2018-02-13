package fr.jgj.gestibank.model;

public class Utilisateur {
	
	//@Id
	private Long id;
	private String nom;
	private String prenom;
	private String identifiant;
	private String mdp;
	private String email;
	private String adresse;
	
	
	//Constructeurs
	public Utilisateur() {
		super();
	}
	public Utilisateur(Long id, String nom, String prenom, String identifiant,
			String mdp, String email, String adresse) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.identifiant = identifiant;
		this.mdp = mdp;
		this.email = email;
		this.adresse = adresse;
	}
	
	//Getters-Setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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
	
	public String getIdentifiant() {
		return identifiant;
	}
	public void setIdentifiant(String identifiant) {
		this.identifiant = identifiant;
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
	
	
}
