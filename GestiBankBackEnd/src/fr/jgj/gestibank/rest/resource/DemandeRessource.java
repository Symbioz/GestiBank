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
	 * Récupération d'une demande via son identifiant unique
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
	 * Mise à jour d'une demande : permet notamment de passer le status de la demande en 'traité'
	 * @param : consomme une demande au format JSON  
	 * @return : retourne la demande modifiée au format JSON
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
	 * Récupération des demandes d'un client donné
	 * getDemandesByClient(idClient)
	 * 
	 * dans DemandeRessource ou ClientRessource ???
	 */
	
	/*
	 * TODO
	 * CRUD -- READ operation
	 * Récupération des demandes d'un client donné
	 * getDemandesByAgent(idAgent)
	 * 
	 * dans DemandeRessource ou ClientRessource ???
	 */
	
	
	// CRUD -- CREATE operation
	// Création d'une nouvelle demande --> la création de demandes doit être gérée dans 'ClientRessource' 
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande createDemande(Demande demande) {
		Demande demandeResponse = demandeService.creerDemande(demande);
		return demandeResponse;
	} // >> http://localhost:8080/GestiBankBackEnd/demandes + JSON

	
	
	
	
	//SURSPECIFICATION (pour les tests SOAPUI)
	
	// CRUD -- READ operation
	// Récupération de toutes les demandes existantes (nécessaire ?????)
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Demande> listAllDemandes() {
		List<Demande> demandeList = demandeService.getAllDemandes();
		return demandeList;
	} // >> http://localhost:8080/GestiBankBackEnd/demandes

	
	// CRUD -- DELETE operation
	// Suppression d'une demande via son identifiant unique (ou préfère-t-on garder une trace de toutes les demandes traitées ?)
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Demande deleteDemande(@PathParam("id") String id) {
		Demande demandeResponse = demandeService.supprimerDemande(id);
		return demandeResponse;
	}
}
