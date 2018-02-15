package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.ICompteDAO;
import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.CompteCourant;
import fr.jgj.gestibank.model.CompteRemunere;
import fr.jgj.gestibank.model.Operation;

public class CompteDAOImpl implements ICompteDAO {
	
	//static HashMap<String, Compte> comptesMap = new HashMap<String, Compte>();
	
	static HashMap<String, Compte> comptesMap = createMap();
	
    static HashMap<String, Compte> createMap()
    {
    	HashMap<String, Compte> comptesMap = new HashMap<String, Compte>();
//    	CompteCourant compte1 = (CompteCourant) new Compte(1000100000000001L, 1000f, new Date("01/01/2001"), null);
//    	compte1.setDecouvertAutorise(150f);
    	CompteCourant compte1 = new CompteCourant(1000100000000001L, 1000f, new Date("01/01/2001"), null, 100f);
    	CompteRemunere compte2 = new CompteRemunere(1000100000000002L, 2000f, new Date("02/02/2002"), null);
		comptesMap.put("1000100000000001", compte1);
		comptesMap.put("1000100000000002", compte2);
		return comptesMap;
    }
	
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
