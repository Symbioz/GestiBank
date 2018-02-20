package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.ICompteDAO;
import fr.jgj.gestibank.model.Client;
import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.CompteCourant;
import fr.jgj.gestibank.model.CompteRemunere;
import fr.jgj.gestibank.model.Operation;
import fr.jgj.utils.LoadingUtils;

public class CompteDAOImpl implements ICompteDAO {
	
	//static HashMap<String, Compte> comptesMap = new HashMap<String, Compte>();
	
	//static HashMap<String, Client> clientsMap = new HashMap<String, Client>();
	static List<Compte> comptes = createMap();

    @SuppressWarnings("unchecked")
	static List<Compte> createMap()
    {
    	if (LoadingUtils.dbMap.size() == 0)
			LoadingUtils.createMap();
		return (List<Compte>)LoadingUtils.dbMap.get("comptesMock");
    }
	    
	    
//	static HashMap<String, Compte> comptesMap = createMap();
//	
//    static HashMap<String, Compte> createMap()
//    {
//    	HashMap<String, Compte> comptesMap = new HashMap<String, Compte>();
////    	CompteCourant compte1 = (CompteCourant) new Compte(1000100000000001L, 1000f, new Date("01/01/2001"), null);
////    	compte1.setDecouvertAutorise(150f);
//    	CompteCourant  compte1 = new CompteCourant ("10010001", 1L, 1000f, new Date("01/01/2001"), new ArrayList<Operation>(), 100f);
//    	CompteRemunere compte2 = new CompteRemunere("10010002", 1L, 2000f, new Date("02/02/2002"), new ArrayList<Operation>());
//    	CompteCourant  compte3 = new CompteCourant ("10010003", 2L, 3000f, new Date("03/03/2003"), new ArrayList<Operation>(), 100f);
//    	CompteRemunere compte4 = new CompteRemunere("10010004", 2L, 4000f, new Date("04/04/2004"), new ArrayList<Operation>());
//    	CompteRemunere compte5 = new CompteRemunere("10010005", 2L, 5000f, new Date("05/05/2005"), new ArrayList<Operation>());
//		comptesMap.put("10010001", compte1);
//		comptesMap.put("10010002", compte2);
//		comptesMap.put("10010003", compte3);
//		comptesMap.put("10010004", compte4);
//		comptesMap.put("10010005", compte5);
//		return comptesMap;
//    }
	
	@Override
	public List<Compte> getAllComptes() {
		//List<Compte> comptes = new ArrayList<Compte>(comptesMap.values());
		return comptes;
	}
	
	@Override
	public Compte getCompteByIBAN(String IBAN) {
		Compte compte = null;
		for (Compte cpt : comptes) {
			if (cpt.getIBAN().equals(IBAN)) {
				compte = cpt;
			}
		}
		return compte;
	}
	
	@Override
	public List<Compte> getComptesByClient(int idClient) {
		//création de la liste filtrée
		List<Compte> comptesByClient = new ArrayList<Compte>();
		
		//pour l'ensemble des opérations en mémoires
		for (Compte compte : comptes) {
			//suivant l'identifiant du compte
			if (compte.getIdClient() == idClient) {
				comptesByClient.add(compte);
			}
		}		
		return comptesByClient;
	}

	@Override
	public Compte ajoutCompte(Compte compte) {
		//comptesMap.put(compte.getIBAN() + "",  compte);
		//return comptesMap.get(compte.getIBAN());
		//ajout du compte à la liste de comptes
		comptes.add(compte);
		//persistance de la liste modifiée
		LoadingUtils.dbMap.put("comptesMock", comptes);
		//ajout du compte à la liste de compte du client
		
		//TODO
		
		return compte;
	}

	@Override
	public Compte modifierCompte(Compte compte) {
//		if (comptesMap.get(compte.getIBAN()) != null) {
//			comptesMap.get(compte.getIBAN()).setIdClient(compte.getIdClient());
//			comptesMap.get(compte.getIBAN()).setSolde(compte.getSolde());
//			comptesMap.get(compte.getIBAN()).setDateCreation(compte.getDateCreation());
//			comptesMap.get(compte.getIBAN()).setOperations(compte.getOperations());
//		} else {
//			comptesMap.put(compte.getIBAN() + "", compte);
//		}
//		return comptesMap.get(compte.getIBAN());
		
		
		//TODO
		return null;
	}

	
}
