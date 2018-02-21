 package fr.jgj.gestibank.dao.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.model.Client;
import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.Notification;

public class ClientDAOImpl {

	//static HashMap<String, Client> clientsMap = new HashMap<String, Client>();
	static HashMap<String, Client> clientsMap = createMap();

    static HashMap<String, Client> createMap()
    {
    	HashMap<String,Client> clientsMap = new HashMap<String,Client>();
    	Client client1 = new Client(1L, "moi","encore moi ", "0000",  "moa@gk.com", "blabla 59000", "symbioz", "truc", 0, "machin", null, null, null, "A001");

    	Client client2 = new Client(2L, "toi","toujours moi ", "1234",  "toa@gk.com", "blabla 59000", "XD", null, 0,"chose", null, null, null, "A001");
    	
    	Client client3 = new Client(3L, "Raes", "Jordan", "0000", "jordan.raes@email", "59250 Halluin", "jraes", "0600000000", 
				0, "Ca ne nous regarde pas", new ArrayList<Compte>(), new ArrayList<File>(), new ArrayList<Notification>(), "A002");
    	
    	client2.setNom("toi");
		clientsMap.put("1", client1);
		clientsMap.put("2", client2);
		clientsMap.put("3", client3);
        return clientsMap;
    }
    	
    		
	public ClientDAOImpl() {

	}
	
	public List<Client> getAllClients() {
		List<Client> clientList = new ArrayList<Client>(clientsMap.values());
		return clientList;
	}
	
	public Client getClientById(String id) {
		Client client = clientsMap.get(id);
		return client;
	}
	
	public Client createClient(Client client) {
		clientsMap.put(client.getId() + "",  client);
		return clientsMap.get(client.getId());
	}
	
	public Client updateClient(Client client) {
		if (clientsMap.get(client.getId()) != null) {
			clientsMap.get(client.getId()).setIdentifiant(client.getIdentifiant());
			clientsMap.get(client.getId()).setAdresse(client.getAdresse());
			clientsMap.get(client.getId()).setEmail(client.getEmail());
		} else {
			clientsMap.put(client.getId() + "", client);
		}
		return clientsMap.get(client.getId());
	}
	
	public Client deleteClient(String id) {
		Client clientResponse = clientsMap.remove(id);
		return clientResponse;
	}
	
	public void deleteAllClients() {
		clientsMap.clear();
	}
	
}