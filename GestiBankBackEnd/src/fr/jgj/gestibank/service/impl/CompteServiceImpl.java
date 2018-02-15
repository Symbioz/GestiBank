package fr.jgj.gestibank.service.impl;

import java.util.List;

import fr.jgj.gestibank.dao.impl.CompteDAOImpl;
import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.service.ICompteService;

public class CompteServiceImpl implements ICompteService {
	
	//à modifier pour utiliser spring
	CompteDAOImpl compteDAOImpl = new CompteDAOImpl();
	
	
	@Override
	public List<Compte> getAllComptes() {
		List<Compte> comptes = compteDAOImpl.getAllComptes();
		return comptes;
	}

	@Override
	public Compte getCompteByIBAN(String IBAN) {
		Compte compte = compteDAOImpl.getCompteByIBAN(IBAN);
		return compte;
	}

	@Override
	public Compte ajoutCompte(Compte compte) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Compte modifierCompte(Compte compte) {
		// TODO Auto-generated method stub
		return null;
	}

}
