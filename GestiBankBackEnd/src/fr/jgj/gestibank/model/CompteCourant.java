package fr.jgj.gestibank.model;

public class CompteCourant extends Compte {
	
	static private float tauxAgios;
	
	private float decouvertAutorise;
	private float agios;
	
	
	//constructeur
	public CompteCourant() {
		super();
	}
	
	
	//getters-setters
	public static float getTauxAgios() {
		return tauxAgios;
	}
	public static void setTauxAgios(float tauxAgios) {
		CompteCourant.tauxAgios = tauxAgios;
	}
	public float getDecouvertAutorise() {
		return decouvertAutorise;
	}
	public void setDecouvertAutorise(float decouvertAutorise) {
		this.decouvertAutorise = decouvertAutorise;
	}
	public float getAgios() {
		return agios;
	}
	public void setAgios(float agios) {
		this.agios = agios;
	}
	
}
