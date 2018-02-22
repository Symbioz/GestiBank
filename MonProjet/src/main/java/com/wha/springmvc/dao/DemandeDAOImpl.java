package com.wha.springmvc.dao;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.wha.springmvc.model.Demande;
import com.wha.springmvc.model.DemandeChequier;
import com.wha.springmvc.model.Inscription;


@Repository("demandeDAOImpl")
public class DemandeDAOImpl extends AbstractDao<Long, Demande> implements IDemandeDAO {
	
	
	
	
    @Override
	public Demande getDemandeById(long id) {
		Demande demande = getByKey(id);
		return demande;
	}

    @SuppressWarnings("unchecked")
	public List<Demande> getDemandeByClient(long idClient) {
		List<Demande> demandes;
		demandes = getEntityManager().createQuery("SELECT d FROM Demande d WHERE d.idClient = "+ idClient)
					   .getResultList();
		return demandes;
	}
    @SuppressWarnings("unchecked")
	public List<Inscription> getAllInscriptions() {
		List<Inscription> demandes;
		demandes = getEntityManager().createQuery("SELECT d FROM Demande d WHERE d.iban=null")
					   .getResultList();
		return demandes;
	}

	@Override
	public void creerDemande(Demande demande) {
		persist(demande);
	}

	@Override
	public Demande modifierDemande(Demande demande) {
		
		//TODO
		
		
		return demande;
	}
	@Override
	@SuppressWarnings("unchecked")
	public List<DemandeChequier> getDemandeChequierByClient(Long idClient) {
		System.out.println(idClient);
		System.out.println(getEntityManager());
		List<DemandeChequier> demandes= getEntityManager().createQuery("SELECT d FROM DemandeChequier d WHERE d.idClient=?")
				.setParameter(1, idClient)   
				.getResultList();
		return demandes;
	}

	@Override
	public void creerDemandeChequier(DemandeChequier demande) {
		persist(demande);
		
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<Demande> getAllDemandeByAgent(String matricule) {
		List<Demande> demandes=new ArrayList<Demande>();
		demandes = getEntityManager().createQuery("SELECT d FROM DemandeChequier d WHERE d.idClient IN (SELECT c.id FROM Client c WHERE c.matriculeAgent =?)" )
				.setParameter(1, matricule)   
				.getResultList();
		return demandes;
	}
	@Override
	public List<Demande> getAllDemandes() {
		
		
		@SuppressWarnings("unchecked")
		List<Demande> demandes = getEntityManager().createQuery("SELECT d FROM Demande d")
			.getResultList();
		
		return demandes;
	}	
}
