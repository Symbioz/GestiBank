package com.wha.springmvc.dao;

import java.util.List;

import com.wha.springmvc.model.Compte;



public interface ICompteDAO {
	
	public List<Compte> getAllComptes();
	
	public Compte getCompteByIBAN(String IBAN);
	
	public List<Compte> getComptesByClient(long idClient);
	
	public void ajoutCompte(Compte compte);
	
	public Compte modifierCompte(Compte compte);
	
	
}
