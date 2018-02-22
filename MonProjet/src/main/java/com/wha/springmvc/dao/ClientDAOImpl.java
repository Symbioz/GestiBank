package com.wha.springmvc.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.wha.springmvc.model.Client;


@Repository("clientDAOImpl")
public class ClientDAOImpl extends AbstractDao<Long, Client> implements IClientDAO{

	@PersistenceContext
	EntityManager em;
	
	@SuppressWarnings("unchecked")
	public List<Client> getAllClients() {
		List<Client> clientList = getEntityManager()
			.createQuery("SELECT c FROM Client c")
			.getResultList();
		return clientList;
	}
	
	public Client getClientById(long id) {
		Client client = getByKey(id);
		return client;
	}
	
	@SuppressWarnings("unchecked")
	public List<Client> getClientByMatriculeAgent(String matriculeAgent){
		List<Client> clientListbyAgent = getEntityManager()
				.createQuery("SELECT c FROM Client c where c.id_agent = :matriculeAgent").setParameter("matriculeAgent", matriculeAgent)
				.getResultList();
			return clientListbyAgent;
	}
	
	
	public void creerClient(Client client) {
		persist(client);
	}
		
}