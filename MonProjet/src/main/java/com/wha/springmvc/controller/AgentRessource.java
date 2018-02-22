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
import com.wha.springmvc.model.Client;
import com.wha.springmvc.service.ClientServiceImpl;
import com.wha.springmvc.service.IAgentService;
import com.wha.springmvc.service.IClientService;

@RestController
public class AgentRessource {
	
	@Autowired
	IAgentService agentService;
	IClientService clientService;
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
	  
	  
	   //Recuperer un agent Par son identifiant
	     
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
	    
	    //------------------- Delete a Agent --------------------------------------------------------
	     
	    @RequestMapping(value = "/agents/{id}", method = RequestMethod.DELETE)
	    public ResponseEntity<Agent> supprimerAgent(@PathVariable("id") long id) {
	        System.out.println("Fetching & Deleting User with id " + id);
	 
	        Agent agent = agentService.getAgentById(id);
            String matriculeAgent = agent.getMatricule();
	        
	        // Test verification client
	        List<Client> client = clientService.getClientByMatriculeAgent(matriculeAgent);
	        
	       
	        if (agent == null && client.isEmpty()) {
	            //System.out.println("Unable to delete. User with id " + id + " not found");
	            return new ResponseEntity<Agent>(HttpStatus.NOT_FOUND);
	        }
	 
	        agentService.supprimerAgent(id);
	        return new ResponseEntity<Agent>(HttpStatus.NO_CONTENT);
	    }
	    
	    //------------------- Update a Agent --------------------------------------------------------
	     
	    @RequestMapping(value = "/agents", method = RequestMethod.PUT)
	    public ResponseEntity<Agent> modifierAgent(@RequestBody Agent agent) {
	        //System.out.println("Updating Agent " + id);
	         
	       //Agent currentAgent = agentService.getAgentById(agent.id);
	        
	    	Agent currentAgent = agent;
	        if (currentAgent==null) {
	          //  System.out.println("Agent with id " + id + " not found");
	            return new ResponseEntity<Agent>(HttpStatus.NOT_FOUND);
	        }
	       
	        currentAgent.setNom(agent.getNom());
	        currentAgent.setPrenom(agent.getPrenom());
	        currentAgent.setIdentifiant(agent.getIdentifiant());
	        currentAgent.setMdp(agent.getMdp());
	        currentAgent.setEmail(agent.getEmail());
	        currentAgent.setAdresse(agent.getAdresse());
	        currentAgent.setNumTel(agent.getNumTel());
	        currentAgent.setMatricule(agent.getMatricule());
	        currentAgent.setDateDebutContrat(agent.getDateDebutContrat());
	         
	        agentService.modifierAgent(currentAgent);
	        return new ResponseEntity<Agent>(currentAgent, HttpStatus.OK);
	    }
	    
	    
	    
	    
	 
	 

	
	
	
}