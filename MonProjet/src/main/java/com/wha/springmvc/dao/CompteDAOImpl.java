package com.wha.springmvc.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.wha.springmvc.model.Compte;
import com.wha.springmvc.model.Operation;


@Repository("compteDAOImpl")
public class CompteDAOImpl extends AbstractDao<Long, Compte> implements ICompteDAO {
	
	@PersistenceContext
	EntityManager em;
	
	
	
	@Transactional
	@SuppressWarnings("unchecked")
	public List<Compte> getAllComptes() {
		List<Compte> comptes;
		comptes = em.createQuery("SELECT c FROM Compte c")
				.getResultList();
		return comptes;
	}
	
	public Compte getCompteByIBAN(String IBAN) {
		Compte compte;
		compte = (Compte) em.createQuery("SELECT c FROM Compte c WHERE c.IBAN = " + IBAN)
				.getSingleResult();
		return compte;
	}
	
	@Transactional
	@SuppressWarnings("unchecked")
	public List<Compte> getComptesByClient(long idClient) {
		List<Compte> comptesByClient;
		comptesByClient = em.createQuery("SELECT c FROM Compte c WHERE c.idClient = " + idClient)
				.getResultList();
		return comptesByClient;
	}

	@Override
	public void ajoutCompte(Compte compte) {
		//TODO
	}

	@Override
	public Compte modifierCompte(Compte compte) {
		//TODO
		return null;
	}

	
}
