package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.ICompteDAO;
import fr.jgj.gestibank.model.Compte;

public class CompteDAOImpl implements ICompteDAO {
	
	static HashMap<String, Compte> comptesMap = new HashMap<String, Compte>();
	/*
	static HashMap<String, User> comptesMap = createMap();

    static HashMap<String, User> createMap()
    {
    	HashMap<String,Compte> comptesMap = new HashMap<String,Compte>();
    	Compte compte1 = new Compte(1, "wajih", "Paris 75000", "wajih@gk.com");
		comptesMap.put("1", compte1);
		return comptesMap;
    }
	 */
	
	@Override
	public List<Compte> getAllComptes() {
		List<Compte> comptes = new ArrayList<Compte>(comptesMap.values());
		return comptes;
	}

	@Override
	public Compte getCompteByIBAN(String IBAN) {
		Compte compte = comptesMap.get(IBAN);
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
