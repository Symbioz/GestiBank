
package fr.jgj.gestibank.model;

import java.util.ArrayList;

//public class Client extends Utilisateur {
// J'ai supprimer l'extends pour tester sans trop écrire
public class Client{
	
	
	private int nbEnfants;
	private String situation;
	//private ArrayList<Compte> comptes;
	
	//Construteurs
     public Client(int nbEnfants, String situation) {
		super();
		this.nbEnfants = nbEnfants;
		this.situation = situation;
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
	
	
	
	
	
}