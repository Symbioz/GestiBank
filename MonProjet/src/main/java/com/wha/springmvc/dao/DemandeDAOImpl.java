package com.wha.springmvc.dao;

import java.util.List;

import com.wha.springmvc.model.Demande;



public class DemandeDAOImpl extends AbstractDao<Long, Demande> implements IDemandeDAO {
	
	
    //Methodes permettant de manipuler des demandes
	@Override
	public Demande getDemandeById(long id) {
		Demande demande = getByKey(id);
		return demande;
	}

	@Override
	public List<Demande> getDemandeByClient(long idClient) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Demande creerDemande(Demande demande) {
		// TODO
		return demande;
	}

	@Override
	public Demande modifierDemande(Demande demande) {
		// TODO
		return demande;
	}
	

}
