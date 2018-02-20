package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.model.Compte;

public interface ICompteService {
	
	public List<Compte> getAllComptes();
	
	public List<Compte> getComptesByClient(int idClient);
	
	public Compte getCompteByIBAN(String IBAN);
	
	public Compte ajoutCompte(Compte compte);
	
	public Compte modifierCompte(Compte compte);

}
