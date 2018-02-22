package com.wha.springmvc.controller;

import java.util.List;









import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;




import com.wha.springmvc.model.Agent;
import com.wha.springmvc.model.Client;
import com.wha.springmvc.service.IClientService;

@RestController
public class ClientRessource {
	
	@Autowired
	IClientService clientService;
	
	
	
	//////////////////////////////////////////////////
	//   GESTION DES  CLIENTS
	//////////////////////////////////////////////////
	    
	// Recupérer tous les clients
		@RequestMapping(value = "/client/", method = RequestMethod.GET)
		public ResponseEntity<List<Client>> getAllClient() {
	        List<Client> clientList = clientService.getAllClients();
	        if(clientList.isEmpty()){
	            return new ResponseEntity<List<Client>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
	        }
	        return new ResponseEntity<List<Client>>(clientList, HttpStatus.OK);
	    }
		
		
		//Recuperer un Client Par son identifiant
		
	    @RequestMapping(value = "/client/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<Client> getClientById(@PathVariable("id") long id) {
	        System.out.println("Fetching User with id " + id);
	        Client client = clientService.getClientById(id);
	        if (client == null) {
	            System.out.println("User with id " + id + " not found");
	            return new ResponseEntity<Client>(HttpStatus.NOT_FOUND);
	        }
	        return new ResponseEntity<Client>(client, HttpStatus.OK);
	    }
	    
	  //------------------- Update a CLIENT --------------------------------------------------------
	   
	    
	    @RequestMapping(value = "/client", method = RequestMethod.PUT)
	    public ResponseEntity<Client> modifierClient(@RequestBody Client client) {
	        
	    	Client currentClient = client;
	        if (currentClient==null) {
	          
	            return new ResponseEntity<Client>(HttpStatus.NOT_FOUND);
	        }
	        
	        // on ne mets que le matricule client à modifier
	        //currentClient.set(client.getMatriculeAgent());
	       
	        clientService.modifierClient(currentClient);
	        return new ResponseEntity<Client>(currentClient, HttpStatus.OK);
	    }
	       
        //Recuperer  Clients Par son matriculeAgent
		
	    @RequestMapping(value = "/client/agent/{matriculeAgent}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<List<Client>> getClientByMatriculeAgent(@PathVariable("matriculeAgent") String matriculeAgent) {
	        System.out.println("Fetching User with id " + matriculeAgent);
	        List<Client> client = clientService.getClientByMatriculeAgent(matriculeAgent);
	        if (client == null) {
	            System.out.println("User with id " + matriculeAgent + " not found");
	            return new ResponseEntity<List<Client>>(HttpStatus.NOT_FOUND);
	        }
	        return new ResponseEntity<List<Client>>(client, HttpStatus.OK);
	    }
	   
		
}
