package fr.jgj.gestibank.dao;

import java.util.List;

import fr.jgj.gestibank.model.Compte;


public interface ICompteDAO {
	
	public List<Compte> getAllComptes();
	
	public Compte getCompteByIBAN(String IBAN);
	
	public List<Compte> getComptesByClient(int idClient);
	
	public Compte ajoutCompte(Compte compte);
	
	public Compte modifierCompte(Compte compte);
	
	
}
