package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.IInscriptionDAO;
import fr.jgj.gestibank.model.Inscription;

public class InscriptionDAOImpl implements IInscriptionDAO {

	static HashMap<String, Inscription> inscriptionsMap = createMap();

	static HashMap<String, Inscription> createMap() {
		HashMap<String, Inscription> inscriptionsMap = new HashMap<String, Inscription>();
		Inscription inscription1 = new Inscription(1L, 1L, new Date(), true, new Date());
		Inscription inscription2 = new Inscription(2L, 2L, new Date(), false, new Date());
		Inscription inscription3 = new Inscription(3L, 3L, new Date(), true, null);
		Inscription inscription4 = new Inscription(4L, 0, new Date(), false, new Date());

		inscriptionsMap.put("1", inscription1);
		inscriptionsMap.put("2", inscription2);
		inscriptionsMap.put("3", inscription3);
		inscriptionsMap.put("4", inscription4);
		return inscriptionsMap;
	}

	@Override
	public List<Inscription> getAllInscriptions() {
		List<Inscription> inscriptionsList = new ArrayList<Inscription>(
				inscriptionsMap.values());
		return inscriptionsList;

	}

}