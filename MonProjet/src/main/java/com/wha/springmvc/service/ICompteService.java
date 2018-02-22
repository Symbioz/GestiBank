package com.wha.springmvc.service;

import java.util.List;

import com.wha.springmvc.model.Compte;


public interface ICompteService {
	
	public List<Compte> getAllComptes();
	
	public List<Compte> getComptesByClient(long idClient);
	
	public Compte getCompteByIBAN(String IBAN);
	
	public void ajoutCompte(Compte compte);
	
	public Compte modifierCompte(Compte compte);

}
