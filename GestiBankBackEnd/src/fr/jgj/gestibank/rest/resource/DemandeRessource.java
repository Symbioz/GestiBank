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
	
	
	/**
	 * CRUD -- READ operation
	 * R�cup�ration d'une demande via son identifiant unique
	 * @param id
	 * @return
	 */
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Demande getDemandesByID(@PathParam("id") String id) {
		Demande demande = demandeService.getDemandeById(id);
		return demande;
	} // >> http://localhost:8080/GestiBankBackEnd/demandes/1


	/**
	 * CRUD -- UPDATE operation
	 * Mise � jour d'une demande : permet notamment de passer le status de la demande en 'trait�'
	 * @param : consomme une demande au format JSON  
	 * @return : retourne la demande modifi�e au format JSON
	 */
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande updateDemande(Demande demande) {
		Demande demandeResponse = demandeService.modifierDemande(demande);
		return demandeResponse;
	} // >> http://localhost:8080/GestiBankBackEnd/demandes + JSON 

	/*
	 * TODO
	 * CRUD -- READ operation
	 * R�cup�ration des demandes d'un client donn�
	 * getDemandesByClient(idClient)
	 * 
	 * dans DemandeRessource ou ClientRessource ???
	 */
	
	/*
	 * TODO
	 * CRUD -- READ operation
	 * R�cup�ration des demandes d'un client donn�
	 * getDemandesByAgent(idAgent)
	 * 
	 * dans DemandeRessource ou ClientRessource ???
	 */
	
	
	// CRUD -- CREATE operation
	// Cr�ation d'une nouvelle demande --> la cr�ation de demandes doit �tre g�r�e dans 'ClientRessource' 
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande createDemande(Demande demande) {
		Demande demandeResponse = demandeService.creerDemande(demande);
		return demandeResponse;
	} // >> http://localhost:8080/GestiBankBackEnd/demandes + JSON

	
	
	
	
	//SURSPECIFICATION (pour les tests SOAPUI)
	
	// CRUD -- READ operation
	// R�cup�ration de toutes les demandes existantes (n�cessaire ?????)
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Demande> listAllDemandes() {
		List<Demande> demandeList = demandeService.getAllDemandes();
		return demandeList;
	} // >> http://localhost:8080/GestiBankBackEnd/demandes

	
	// CRUD -- DELETE operation
	// Suppression d'une demande via son identifiant unique (ou pr�f�re-t-on garder une trace de toutes les demandes trait�es ?)
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Demande deleteDemande(@PathParam("id") String id) {
		Demande demandeResponse = demandeService.supprimerDemande(id);
		return demandeResponse;
	}
}
