package fr.jgj.gestibank.model;

import java.util.Date;

public class Agent extends Utilisateur {
    
	private int matricule;
	private Date dateDebutContrat;
	private Date dateFinContrat;
	
	//Constructeurs
    
	
	public Agent() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Agent(Long id, String nom, String prenom, String identifiant,
			String mdp, String email, String adresse) {
		super(id, nom, prenom, identifiant, mdp, email, adresse);
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	public Agent(Long id, String nom, String prenom, String identifiant,
			String mdp, String email, String adresse, int matricule,
			Date dateDebutContrat, Date dateFinContrat) {
		super(id, nom, prenom, identifiant, mdp, email, adresse);
		this.matricule = matricule;
		this.dateDebutContrat = dateDebutContrat;
		this.dateFinContrat = dateFinContrat;
	}
    /*
	public Agent(int matricule, Date dateDebutContrat, Date dateFinContrat) {
		super();
		this.matricule = matricule;
		this.dateDebutContrat = dateDebutContrat;
		this.dateFinContrat = dateFinContrat;
	}*/

	

	//Getters-Setters
	public int getMatricule() {
		return matricule;
	}
	
	public void setMatricule(int matricule) {
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
