package com.rj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.rj.gestibank.dao.ICompteDAO;
import com.rj.gestibank.model.Compte;

public class CompteDAOImpl implements ICompteDAO {
	
	static HashMap<Long, Compte> comptesMap = new HashMap<Long, Compte>();
	/*
	static HashMap<String, User> usersMap = createMap();

    static HashMap<String, User> createMap()
    {
    	HashMap<String,User> usersMap = new HashMap<String,User>();
    	User user1 = new User(1, "wajih", "Paris 75000", "wajih@gk.com");
		User user2 = new User(2, "aline", "Rueil 92500", "aline@gk.com");
		usersMap.put("1", user1);
		usersMap.put("2", user2);
        return usersMap;
    }
	 */
	
	@Override
	public List<Compte> getAllComptes() {
		List<Compte> comptes = new ArrayList<Compte>(comptesMap.values());
		return comptes;
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

	@Override
	public Compte getCompteByIBAN(String IBAN) {
		// TODO Auto-generated method stub
		return null;
	}

}
