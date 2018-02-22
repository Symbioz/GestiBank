package com.wha.springmvc.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wha.springmvc.dao.ICompteDAO;
import com.wha.springmvc.model.Compte;

@Service("compteService")
@Transactional
public class CompteServiceImpl implements ICompteService {
	
	@Autowired
	ICompteDAO compteDAOImpl;
	
	//Récupération de tous les comptes existants
	public List<Compte> getAllComptes() {
		List<Compte> comptes = compteDAOImpl.getAllComptes();
		return comptes;
	}

	//Récupération de l'ensemble des comptes d'un client
	public List<Compte> getComptesByClient(long idClient) {
		List<Compte> comptes = compteDAOImpl.getComptesByClient(idClient);
		return comptes;
	}
	
	//Récupération d'un compte via son IBAN (identifiant unique)
	public Compte getCompteByIBAN(String IBAN) {
		Compte compte = compteDAOImpl.getCompteByIBAN(IBAN);
		return compte;
	}
	
	//Ajout d'un compte
	public void ajoutCompte(Compte compte) {
		compteDAOImpl.ajoutCompte(compte);
	}
	
	//Modification d'un compte
	public Compte modifierCompte(Compte compte) {
		Compte compteResponse = compteDAOImpl.modifierCompte(compte);
		return compteResponse;
	}

	
}
