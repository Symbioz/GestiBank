package fr.jgj.gestibank.model;

import java.util.Date;

public class Agent extends Utilisateur {
    
	private String matricule;
	private Date dateDebutContrat;
	private Date dateFinContrat;
	
	//Constructeurs
    public Agent() {
		super();
	}
   
	public Agent(long id, String nom, String prenom, String mdp, String email,
			String adresse, String identifiant, String numTel) {
		super(id, nom, prenom, mdp, email, adresse, identifiant, numTel);

	}
	
	public Agent(long id, String nom, String prenom, String mdp, String email,
			String adresse, String identifiant, String numTel, String matricule,
			Date dateDebutContrat, Date dateFinContrat) {
		super(id, nom, prenom, identifiant, mdp, email, adresse,numTel);
		this.matricule = matricule;
		this.dateDebutContrat = dateDebutContrat;
		this.dateFinContrat = dateFinContrat;
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
	public Date getDateFinContrat() {
		return dateFinContrat;
	}
	public void setDateFinContrat(Date dateFinContrat) {
		this.dateFinContrat = dateFinContrat;
	}
	
}