package com.rj.gestibank.model;

public class CompteRemunere extends Compte {
	
	static private float taux = 2f; //taux d'intérêts fixé à 2%
	private float interets;
	
	
	//construteur
	public CompteRemunere() {
		super();
	}


	//getters-setters
	public static float getTaux() {
		return taux;
	}
	public static void setTaux(float taux) {
		CompteRemunere.taux = taux;
	}

	public float getInterets() {
		return interets;
	}
	public void setInterets(float interets) {
		this.interets = interets;
	}
	
	
}
