package com.wha.springmvc.dao;

import java.util.List;

import com.wha.springmvc.model.Client;

public interface IClientDAO {
	
<<<<<<< HEAD
	
	
=======
>>>>>>> jennifer
	public List<Client> getAllClients();
	
	public Client getClientById(long id);
	
<<<<<<< HEAD
	public void creerClient(Client client);
	
	public Client modifierClient(Client client);
	
	
}
=======
	public List<Client> getClientByMatriculeAgent(String matriculeAgent);
	
	public void creerClient(Client client);
	
}
>>>>>>> jennifer
