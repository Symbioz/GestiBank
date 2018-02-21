package fr.jgj.gestibank.rest.resource;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import fr.jgj.gestibank.model.Utilisateur;
import fr.jgj.gestibank.service.impl.UtilisateurServiceImpl;

@Path("")
public class UtilisateurRessource {
	
	UtilisateurServiceImpl utilisateurServiceImpl = new UtilisateurServiceImpl();
	
	
	// CRUD -- READ operation
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Utilisateur> listAllUtilisateurs() {
		List<Utilisateur> utilisateurList = utilisateurServiceImpl.getAllUtilisateurs();
		return utilisateurList;
	}	

}
