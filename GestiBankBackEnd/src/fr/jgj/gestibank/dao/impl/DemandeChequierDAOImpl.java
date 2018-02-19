package fr.jgj.gestibank.dao.impl;

import fr.jgj.gestibank.dao.IDemandeChequierDAO;

public class DemandeChequierDAOImpl extends DemandeDAOImpl implements
		IDemandeChequierDAO {

	@Override
	public void demanderChequier(String iban) {
		System.out.println("chéquier demandé");

	}

}
