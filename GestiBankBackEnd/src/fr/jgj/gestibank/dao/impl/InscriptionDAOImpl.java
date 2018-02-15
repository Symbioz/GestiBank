package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.IInscriptionDAO;
import fr.jgj.gestibank.model.Client;
import fr.jgj.gestibank.model.Inscription;


public class InscriptionDAOImpl implements IInscriptionDAO {
	
	    static HashMap<String, Inscription> inscriptionsMap = createMap();
		
	    static HashMap<String, Inscription> createMap()
	    {
	    	HashMap<String,Inscription> inscriptionsMap = new HashMap<String,Inscription>();
	    	Inscription inscription1 = new Inscription((long) 1,new Client(1,"test"), new Date(), true, new Date());
	    	Inscription inscription2 = new Inscription((long) 2,new Client(2,"test"), new Date(), false, new Date());
	    	Inscription inscription3 = new Inscription((long) 3,new Client(2,"test"), new Date(), true, null);
	    	Inscription inscription4 = new Inscription((long) 4,new Client(2,"test"), new Date(), true, new Date());
	    	
			inscriptionsMap.put("1", inscription1);
			inscriptionsMap.put("2", inscription2);
			inscriptionsMap.put("3", inscription3);
			inscriptionsMap.put("4", inscription4);
	        return inscriptionsMap;
	    }
	    

	@Override
	public List<Inscription> getAllInscriptions() {
		List<Inscription> inscriptionsList = new ArrayList<Inscription>(inscriptionsMap.values());
		return inscriptionsList;
		
	}
	
	/*public List<Inscription> getAllInscriptions(String status,
			Date dateAffectation) {
		// A implement (if, voir si on fait avec date ou agent)
		return null;
	}*/

}
