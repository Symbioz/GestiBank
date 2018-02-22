package com.wha.springmvc.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.wha.springmvc.model.Operation;

@Repository("operationDAOImpl")
public class OperationDAOImpl extends AbstractDao<Long, Operation> implements IOperationDAO {
	
	@PersistenceContext
	EntityManager em;
	
	@Transactional
	@SuppressWarnings("unchecked")
	public List<Operation> getAllOperationsByIBAN(String IBAN) {
		List<Operation> ops;
		ops = em.createQuery("SELECT o FROM Operation o WHERE o.IBAN = "+ IBAN)
				.getResultList();
		return ops;
	}
	
	public Operation ajoutOperation(Operation operation) {
		// TODO
		return null;
	}

}
