package fr.jgj.gestibank.rest.resource;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


import fr.jgj.gestibank.model.Inscription;
import fr.jgj.gestibank.service.impl.InscriptionServiceImpl;

@Path("/inscriptions")
public class InscriptionRessource {
	
    InscriptionServiceImpl inscriptionService = new InscriptionServiceImpl();
	
    // CRUD -- READ operation
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Inscription> listAllInscriptions() {
		List<Inscription> inscriptionList = inscriptionService.getAllInscriptions();
		return inscriptionList;
	}
	 

}
