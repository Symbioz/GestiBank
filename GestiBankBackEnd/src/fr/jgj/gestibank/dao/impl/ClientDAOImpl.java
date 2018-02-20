package fr.jgj.gestibank.dao.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import fr.jgj.gestibank.model.Client;
import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.Notification;
import fr.jgj.utils.LoadingUtils;

public class ClientDAOImpl {

	//static HashMap<String, Client> clientsMap = new HashMap<String, Client>();
	static List<Client> clients = createMap();

    @SuppressWarnings("unchecked")
	static List<Client> createMap()
    {
    		//if (LoadingUtils.dbMap.isEmpty())
    		if (LoadingUtils.dbMap.size() == 0){
    			LoadingUtils.createMap();
    		}
    		return (List<Client>)LoadingUtils.dbMap.get("clientsMock");
    }
    	
    		
	public ClientDAOImpl() {

	}
	
	public List<Client> getAllClients() {
		//List<Client> clientList = new ArrayList<Client>(clientsMap.values());
		return clients;
	}
	
	public Client getClientById(int id) {
		Client client = null;
		for (Client c : clients) {
			if (c.getId() == id) {
				client = c;
			}
		}
		return client;
	}
	
	public Client createClient(Client client) {
		clients.add(client);
		LoadingUtils.dbMap.put("clientsMock", clients);
		return client;
	}
	
	public Client updateClient(Client client) {
		if (clients.get(client.getId()) != null) {
			clients.get(client.getId()).setNom(client.getNom());
			clients.get(client.getId()).setPrenom(client.getPrenom());
			clients.get(client.getId()).setMdp(client.getMdp());
			clients.get(client.getId()).setEmail(client.getEmail());
			clients.get(client.getId()).setAdresse(client.getAdresse());
			clients.get(client.getId()).setIdentifiant(client.getIdentifiant());
			clients.get(client.getId()).setNumTel(client.getNumTel());
			clients.get(client.getId()).setNbEnfants(client.getNbEnfants());
			clients.get(client.getId()).setSituation(client.getSituation());
			clients.get(client.getId()).setNbEnfants(client.getNbEnfants());
			clients.get(client.getId()).setComptes(client.getComptes());
			clients.get(client.getId()).setDocuments(client.getDocuments());
			clients.get(client.getId()).setNotifications(client.getNotifications());
			clients.get(client.getId()).setMatriculeAgent(client.getMatriculeAgent());
		} else {
			clients.add(client);
		}
		LoadingUtils.dbMap.put("clientsMock", clients);
		return clients.get(client.getId());
	}
	
	public Client deleteClient(long id) {
		//Client clientResponse = clients.remove(id);
		//return clientResponse;
		Client client = null;
		for (Client c : clients) {
			if (c.getId() == id) {
				client = c;
			break;
			}
		}
		clients.remove(client);
		return client;
	}
	
	public void deleteAllClients() {
		clients.clear();
		LoadingUtils.dbMap.put("clientsMock", clients);
	}
	
}