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
import fr.jgj.gestibank.service.DemandeService;

@Path("/demandes")
public class DemandeResource {

	DemandeService demandeService = new DemandeService();

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
		Demande demandeResponse = demandeService.updateDemande(demande);
		return demandeResponse;
	}

	// CRUD -- CREATE operation
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande createDemande(Demande demande) {
		Demande demandeResponse = demandeService.createDemande(demande);
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
		Demande demandeResponse = demandeService.deleteDemande(id);
		return demandeResponse;
	}

	// CRUD -- DELETE operation
	@DELETE
	public void deleteAllDemandes() {
		demandeService.deleteAllDemandes();
	}

}
