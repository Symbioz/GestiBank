package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.dao.ClientDAO;
import fr.jgj.gestibank.model.Client;

public class ClientService {

	// sera modifié avec l'utilisation de Spring
	ClientDAO clientDao = new ClientDAO();

	// l'utilisation de Spring ne modifier aucune méthode ci-dessous
	public List<Client> getAllClients() {
		List<Client> clientList = clientDao.getAllClients();
		return clientList;
	}

	public Client getClientById(String id) {
		Client client = clientDao.getClientById(id);
		return client;
	}

	public Client createClient(Client client) {
		Client clientResponse = clientDao.createClient(client);
		return clientResponse;
	}

	public Client updateClient(Client client) {
		Client clientResponse = clientDao.updateClient(client);
		return clientResponse;
	}

	public Client deleteClient(String id) {
		Client clientResponse = clientDao.deleteClient(id);
		return clientResponse;
	}

	public void deleteAllClients() {
		clientDao.deleteAllClients();
	}

}
