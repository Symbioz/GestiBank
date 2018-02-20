package fr.jgj.gestibank.service.impl;

import java.util.List;

import fr.jgj.gestibank.dao.impl.CompteDAOImpl;
import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.service.ICompteService;

public class CompteServiceImpl implements ICompteService {
	
	//� modifier pour utiliser spring
	CompteDAOImpl compteDAOImpl = new CompteDAOImpl();
	
	//R�cup�ration de tous les comptes existants
	@Override
	public List<Compte> getAllComptes() {
		List<Compte> comptes = compteDAOImpl.getAllComptes();
		return comptes;
	}

	//R�cup�ration de l'ensemble des comptes d'un client
	@Override
	public List<Compte> getComptesByClient(int idClient) {
		List<Compte> comptes = compteDAOImpl.getComptesByClient(idClient);
		return comptes;
	}
	
	//R�cup�ration d'un compte via son IBAN (identifiant unique)
	@Override
	public Compte getCompteByIBAN(String IBAN) {
		Compte compte = compteDAOImpl.getCompteByIBAN(IBAN);
		return compte;
	}
	
	//Ajout d'un compte
	@Override
	public Compte ajoutCompte(Compte compte) {
		Compte compteResponse = compteDAOImpl.ajoutCompte(compte);
		return compteResponse;
	}
	
	//Modification d'un compte
	@Override
	public Compte modifierCompte(Compte compte) {
		Compte compteResponse = compteDAOImpl.modifierCompte(compte);
		return compteResponse;
	}

	
}
