package com.wha.springmvc.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.wha.springmvc.model.Demande;


@Repository("demandeDAOImpl")
public class DemandeDAOImpl extends AbstractDao<Long, Demande> implements IDemandeDAO {
	
	@PersistenceContext
	EntityManager em;
	
	
    @Override
	public Demande getDemandeById(long id) {
		Demande demande = getByKey(id);
		return demande;
	}

    @SuppressWarnings("unchecked")
	public List<Demande> getDemandeByClient(long idClient) {
		List<Demande> demandes;
		demandes = em.createQuery("SELECT d FROM Demande d WHERE d.idClient = "+ idClient)
					   .getResultList();
		return demandes;
	}

	@Override
	public void creerDemande(Demande demande) {
		persist(demande);
	}

	@Override
	public void modifierDemande(Demande demande) {
		// TODO
	}
	

}
