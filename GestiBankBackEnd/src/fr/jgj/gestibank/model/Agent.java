package fr.jgj.gestibank.model;

import java.util.Date;

public class Agent extends Utilisateur {
    
	private String matricule;
	private Date dateDebutContrat;

	
	//Constructeurs
    
	
	public Agent() {
		super();
	}

	
	
   
	public Agent(Long id, String nom, String prenom, String identifiant,
			String mdp, String email, String adresse, String numtel) {
		super(id, nom, prenom, identifiant, mdp, email, adresse,numtel);
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	public Agent(Long id, String nom, String prenom, String identifiant,
			String mdp, String email, String adresse,String numtel, String matricule,
			Date dateDebutContrat) {
		super(id, nom, prenom, identifiant, mdp, email, adresse,numtel);
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