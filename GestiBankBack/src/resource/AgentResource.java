package resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
//import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import model.Agent;
import service.AgentService;

@Path("admin/gestionAgents")
public class AgentResource {
	
	AgentService agentService = new AgentService();
	
	// CRUD -- READ operation
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Agent> listAllAgents() {
		List<Agent> agentList = agentService.getAllAgents();
		return agentList;
	}
	
	// CRUD -- CREATE operation
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Agent createAgent(Agent agent){
		Agent agentResponse = agentService.createAgent(agent);
		return agentResponse;
	}
	/*
	// CRUD -- UPDATE operation
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Agent updateUser(Agent agent){
		Agent agentResponse = agentService.updateAgent(agent);
		return agentResponse;
	}*/
	
	// CRUD -- DELETE operation
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Agent deleteAgent(@PathParam("id") String id) {
		Agent agentResponse = agentService.deleteAgent(id);
		return agentResponse;
	}

}