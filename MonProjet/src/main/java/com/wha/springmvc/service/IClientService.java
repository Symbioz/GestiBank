package com.wha.springmvc.service;

import java.util.List;

import com.wha.springmvc.model.Client;

public interface IClientService {
   
	public	List<Client> getAllClients();
	
	public void modifierClient(Client client);
	
	public Client getClientById(long id);
	
	public List<Client> getClientByMatriculeAgent(String matriculeAgent);
	
}
