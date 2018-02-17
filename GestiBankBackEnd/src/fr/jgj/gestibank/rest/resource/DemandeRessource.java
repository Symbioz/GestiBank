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

import fr.jgj.gestibank.model.Demande;
import fr.jgj.gestibank.service.impl.DemandeServiceImpl;

@Path("/demandes")
public class DemandeRessource {
	
	DemandeServiceImpl demandeService = new DemandeServiceImpl();
	
	// CRUD -- READ operation
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Demande> listAllDemandes() {
		List<Demande> demandeList = demandeService.getAllDemandes();
		return demandeList;
	}

	// CRUD -- UPDATE operation
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande updateDemande(Demande demande) {
		Demande demandeResponse = demandeService.modifierDemande(demande);
		return demandeResponse;
	}

	// CRUD -- CREATE operation
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande createDemande(Demande demande) {
		Demande demandeResponse = demandeService.creerDemande(demande);
		return demandeResponse;
	}

	// CRUD -- READ operation
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Demande getDemande(@PathParam("id") String id) {
		Demande demande = demandeService.getDemandeById(id);
		return demande;
	}

	// CRUD -- DELETE operation
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Demande deleteDemande(@PathParam("id") String id) {
		Demande demandeResponse = demandeService.supprimerDemande(id);
		return demandeResponse;
	}
}
