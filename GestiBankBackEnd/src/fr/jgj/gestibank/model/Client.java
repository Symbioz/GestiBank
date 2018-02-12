package fr.jgj.gestibank.model;

import java.util.ArrayList;

public class Client extends Utilisateur {
	
	private String numTel;
	private int nbEnfants;
	private String situation;
	private ArrayList<Compte> comptes;
	
	//Construteurs
	public Client() {
		super();
	}
	
	
}
