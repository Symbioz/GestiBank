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

import fr.jgj.gestibank.model.Utilisateur;
import fr.jgj.gestibank.service.UtilisateurService;

@Path("/utilisateurs")
public class UtilisateurResource {
	
	UtilisateurService utilisateurService = new UtilisateurService();
	
	// CRUD -- READ operation
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Utilisateur> listAllUtilisateurs() {
		List<Utilisateur> utilisateurList = utilisateurService.getAllUtilisateurs();
		return utilisateurList;
	}
	
	// CRUD -- READ operation
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Utilisateur getUtilisateur(@PathParam("id") String id) {
		Utilisateur utilisateur = utilisateurService.getUtilisateurForId(id);
		return utilisateur;
	}
	
	// CRUD -- CREATE operation
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Utilisateur createUtilisateur(Utilisateur utilisateur){
		Utilisateur utilisateurResponse = utilisateurService.createUtilisateur(utilisateur);
		return utilisateurResponse;
	}
	
	// CRUD -- UPDATE operation
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Utilisateur updateUtilisateur(Utilisateur utilisateur){
		Utilisateur utilisateurResponse = utilisateurService.updateUtilisateur(utilisateur);
		return utilisateurResponse;
	}
	
	// CRUD -- DELETE operation
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Utilisateur deleteUtilisateur(@PathParam("id") String id) {
		Utilisateur utilisateurResponse = utilisateurService.deleteUtilisateur(id);
		return utilisateurResponse;
	}

	// CRUD -- DELETE operation
	@DELETE
	public void deleteAllUtilisateurs() {
		utilisateurService.deleteAllUtilisateurs();
	}
}
