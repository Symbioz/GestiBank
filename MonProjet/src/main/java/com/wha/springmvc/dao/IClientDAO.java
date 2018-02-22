package com.wha.springmvc.dao;

import java.util.List;

import com.wha.springmvc.model.Client;

public interface IClientDAO {
	
	public List<Client> getAllClients();
	
	public Client getClientById(long id);
	
	public void creerClient(Client client);
	
	public Client modifierClient(Client client);
	
	
}
