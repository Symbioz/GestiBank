package com.wha.springmvc.dao;

import java.util.List;

import com.wha.springmvc.model.Client;

public interface IClientDAO {
	
	public List<Client> getAllClients();
	
	public Client getClientById(long id);
	
	public List<Client> getClientByMatriculeAgent(String matriculeAgent);
	
	public void creerClient(Client client);
	
}