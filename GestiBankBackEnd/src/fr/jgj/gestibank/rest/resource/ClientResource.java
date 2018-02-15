package fr.jgj.gestibank.rest.resource;



import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import fr.jgj.gestibank.model.Client;
import fr.jgj.gestibank.service.ClientService;

@Path("/clients")
public class ClientResource {

	ClientService clientService = new ClientService();

	// CRUD -- READ operation
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Client> listAllClients() {
		List<Client> clientList = clientService.getAllClients();
		return clientList;
	}

	// CRUD -- UPDATE operation
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Client updateClient(Client client) {
		Client clientResponse = clientService.updateClient(client);
		return clientResponse;
	}

	// CRUD -- CREATE operation
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Client createClient(Client client) {
		Client clientResponse = clientService.createClient(client);
		return clientResponse;
	}

	// CRUD -- READ operation
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Client getClient(@PathParam("id") String id) {
		Client client = clientService.getClientById(id);
		return client;
	}

	// CRUD -- DELETE operation
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Client deleteClient(@PathParam("id") String id) {
		Client clientResponse = clientService.deleteClient(id);
		return clientResponse;
	}

	// CRUD -- DELETE operation
	@DELETE
	public void deleteAllClients() {
		clientService.deleteAllClients();
	}

}
