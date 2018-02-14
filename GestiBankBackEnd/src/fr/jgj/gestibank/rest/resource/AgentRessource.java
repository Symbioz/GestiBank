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

import fr.jgj.gestibank.model.Agent;
import fr.jgj.gestibank.service.impl.AgentServiceImpl;


@Path("agents")
public class AgentRessource {
	
	AgentServiceImpl agentService = new AgentServiceImpl();
	
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
	public Agent creerAgent(Agent agent){
		Agent agentResponse = agentService.creerAgent(agent);
		return agentResponse;
	}
	
	// CRUD -- UPDATE operation
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Agent modifierAegnt(Agent agent){
		Agent agentResponse = agentService.modifierAgent(agent);
		return agentResponse;
	}
	
	// CRUD -- DELETE operation
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Agent supprimerAgent(@PathParam("id") Long id) {
		Agent agentResponse = agentService.supprimerAgent(id);
		return agentResponse;
	}

}