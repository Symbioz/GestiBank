package model;

public class Agent extends Utilisateur{
	
	private int matricule;

	

	public Agent(long id,int matricule, String nom, String prenom, String email, String numTel, String motDePasse, Adresse adresse) {
		super(id, nom, prenom, email, numTel, motDePasse, adresse);
		this.matricule = matricule;
	}

	public int getMatricule() {
		return matricule;
	}

	public void setMatricule(int matricule) {
		this.matricule = matricule;
	}
    
	
    
	

}