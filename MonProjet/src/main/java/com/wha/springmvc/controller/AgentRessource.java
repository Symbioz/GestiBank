package com.wha.springmvc.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.wha.springmvc.model.Agent;
import com.wha.springmvc.model.User;
import com.wha.springmvc.service.IAgentService;

//import javax.ws.rs.Consumes;
//import javax.ws.rs.DELETE;
//import javax.ws.rs.GET;
//import javax.ws.rs.POST;
//import javax.ws.rs.PUT;
//import javax.ws.rs.Path;
//import javax.ws.rs.PathParam;
//import javax.ws.rs.Produces;
//import javax.ws.rs.core.MediaType;

//import fr.jgj.gestibank.model.Agent;
//import fr.jgj.gestibank.service.impl.AgentServiceImpl;

//@Path("/agents")

@RestController
public class AgentRessource {
	
	@Autowired
	IAgentService agentService;
	//AgentServiceImpl agentService = new AgentServiceImpl();
	
	// CRUD -- READ operation
	@RequestMapping(value = "/agents/", method = RequestMethod.GET)
	public ResponseEntity<List<Agent>> listAllAgents() {
        List<Agent> agentList = agentService.getAllAgents();
        if(agentList.isEmpty()){
            return new ResponseEntity<List<Agent>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Agent>>(agentList, HttpStatus.OK);
    }
	
	 // Creer un Agent
	  @RequestMapping(value = "/agents/", method = RequestMethod.POST)
	    public ResponseEntity<Void> createUser(@RequestBody Agent agent,    UriComponentsBuilder ucBuilder) {
	        System.out.println("Creating User " + agent.getNom());
	 
	        /*if (agentService.isUserExist(agent)) {
	            System.out.println("A User with name " + user.getUsername() + " already exist");
	            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
	        }*/
	 
	        agentService.creerAgent(agent);
	 
	        HttpHeaders headers = new HttpHeaders();
	        headers.setLocation(ucBuilder.path("/agent/{id}").buildAndExpand(agent.getId()).toUri());
	        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	    }
	  
	  
	  @RequestMapping(value = "/agents/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<Agent> getAgentById(@PathVariable("id") long id) {
	        System.out.println("Fetching User with id " + id);
	        Agent agent = agentService.getAgentById(id);
	        if (agent == null) {
	            System.out.println("User with id " + id + " not found");
	            return new ResponseEntity<Agent>(HttpStatus.NOT_FOUND);
	        }
	        return new ResponseEntity<Agent>(agent, HttpStatus.OK);
	    }
	    
	    //------------------- Delete a User --------------------------------------------------------
	     
	    @RequestMapping(value = "/agents/{id}", method = RequestMethod.DELETE)
	    public ResponseEntity<Agent> supprimerAgent(@PathVariable("id") long id) {
	        System.out.println("Fetching & Deleting User with id " + id);
	 
	        Agent agent = agentService.getAgentById(id);
	        if (agent == null) {
	            System.out.println("Unable to delete. User with id " + id + " not found");
	            return new ResponseEntity<Agent>(HttpStatus.NOT_FOUND);
	        }
	 
	        agentService.supprimerAgent(id);
	        return new ResponseEntity<Agent>(HttpStatus.NO_CONTENT);
	    }
	 
	     
	 
	
	

	/*
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
	public Agent modifierAgent(Agent agent){
		Agent agentResponse = agentService.modifierAgent(agent);
		return agentResponse;
	}
	
	// CRUD -- DELETE operation
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Agent supprimerAgent(@PathParam("id") String id) {
		Agent agentResponse = agentService.supprimerAgent(id);
		return agentResponse;
	}*/
	
	/*@RequestMapping(value = "/agents/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Agent> supprimerAgent(@PathVariable("id") long id) {
        System.out.println("Fetching & Deleting User with id " + id);
 
        Agent agent = agentService.findById((int)id);
        if (user == null) {
            System.out.println("Unable to delete. User with id " + id + " not found");
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
 
        userService.deleteUserById(id);
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }*/
 
	
	
	/*
	
	// CRUD -- READ operation
		@GET
		@Path("/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public Agent getAgentByID(@PathParam("id") String id) {
			Agent agent = agentService.getAgentById(id);
			return agent;
	}
	*/
	

}