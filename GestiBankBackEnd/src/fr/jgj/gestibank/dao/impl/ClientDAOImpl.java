package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.model.Client;

public class ClientDAOImpl {

	//static HashMap<String, Client> clientsMap = new HashMap<String, Client>();
	static HashMap<String, Client> clientsMap = createMap();

    static HashMap<String, Client> createMap()
    {
    	HashMap<String,Client> clientsMap = new HashMap<String,Client>();
    	Client client1 = new Client(1, "moi","encore moi ", "0000",  "moa@gk.com", "blabla 59000", "symbioz", "truc", 0, "machin", null, null, null, 0);

    	Client client2 = new Client(2, "toi","toujours moi ", "1234",  "toa@gk.com", "blabla 59000", "XD", null, 0,"chose", null, null, null, 0);
    	client2.setNom("toi");
		clientsMap.put("1", client1);
		clientsMap.put("2", client2);
        return clientsMap;
    }
    	
    		
	public ClientDAOImpl() {
//		Client client1 = new Client(1, "wajih", "Paris 75000", "wajih@gk.com");
//		Client client2 = new Client(2, "aline", "Rueil 92500", "aline@gk.com");
//		clientsMap.put("1", client1);
//		clientsMap.put("2", client2);
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