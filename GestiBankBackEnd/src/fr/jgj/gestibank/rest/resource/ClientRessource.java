package fr.jgj.gestibank.rest.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.Demande;
import fr.jgj.gestibank.model.Operation;
import fr.jgj.gestibank.model.Client;
import fr.jgj.gestibank.service.impl.CompteServiceImpl;
import fr.jgj.gestibank.service.impl.DemandeServiceImpl;
import fr.jgj.gestibank.service.impl.OperationServiceImpl;
import fr.jgj.gestibank.service.impl.UtilisateurServiceImpl;
import fr.jgj.gestibank.service.impl.ClientServiceImpl;

@Path("/client")
public class ClientRessource {
	
	////////////////////////////
	//   SERVICES
	////////////////////////////
	
	UtilisateurServiceImpl utilisateurServiceImpl = new UtilisateurServiceImpl();
	CompteServiceImpl compteServiceImpl = new CompteServiceImpl();
	OperationServiceImpl operationService = new OperationServiceImpl();
	DemandeServiceImpl demandeService = new DemandeServiceImpl();
	ClientServiceImpl clientService = new ClientServiceImpl();
	
	
	////////////////////////////
	//   GESTION DES COMPTES
	////////////////////////////

	/**
	 * CRUD -- READ operation
	 * R�cup�ration de la liste des comptes pour un client donn�
	 * @param idClient : permet de filtrer l'ensemble des comptes et de ne r�cup�rer 
	 * 					 que les comptes associ�s au client souhait�
	 * @return : retourne une liste de comptes au format JSON
	 */
	@GET
	@Path("/{idClient}/comptes")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Compte> listClientComptes(@PathParam("idClient") long idClient) {
		List<Compte> compteList = compteServiceImpl.getComptesByClient(idClient);
		return compteList;
	} // SOAPUI >> http://localhost:8080/GestiBankBackEnd/client/1/comptes
	
	/**
	 * CRUD -- CREATE operation
	 * Cr�ation d'un compte
	 * @return : retourne uncompte au format JSON
	 */
	@POST
	@Path("/{idClient}/comptes") // idClient non utilis� !!! --> CompteRessource ???
	@Produces(MediaType.APPLICATION_JSON)
	public Compte ajoutCompte(Compte compte) {
		Compte compteResponse = compteServiceImpl.ajoutCompte(compte);
		return compteResponse;
	} // SOAPUI >> http://localhost:8080/GestiBankBackEnd/client/1/comptes
	
	/**
	 * CRUD -- UPDATE operation
	 * Modification d'un compte
	 * @return : retourne une liste de comptes au format JSON
	 */
	@PUT
	@Path("/{idClient}/comptes") // idClient non utilis� !!! --> CompteRessource ???
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Compte modifierCompte(Compte compte) {
		Compte compteResponse = compteServiceImpl.modifierCompte(compte);
		return compteResponse;
	} // SOAPUI >> http://localhost:8080/GestiBankBackEnd/client/1/comptes
	
	/**
	 * CRUD -- READ operation
	 * R�cup�ration d'un compte via son iban 
	 * (� partir de la liste des comptes d'un client donn�)
	 * @param IBAN : repr�sente l'identifiant unique d'un compte
	 * @return : retourne un compte au format JSON
	 */
	@GET
	@Path("/{idClient}/comptes/{IBAN}")
	@Produces(MediaType.APPLICATION_JSON)
	public Compte getCompteByIBAN(@PathParam("IBAN") String IBAN) {
		Compte compte = compteServiceImpl.getCompteByIBAN(IBAN);
		return compte;
	} // SOAPUI >> http://localhost:8080/GestiBankBackEnd/client/1/comptes/10010001	
		
	/**
	 * CRUD -- READ operation
	 * R�cup�ration des operations li�es � un compte donn�
	 * @param iBAN : repr�sente l'identifiant unique d'un compte
	 * @return : retourne une liste de comptes au format JSON
	 */
	@GET
	@Path("/{idClient}/comptes/{iBAN}/operations")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Operation> getAllOperationsByIBAN(@PathParam("iBAN") String iBAN) {
		List<Operation> operationList = operationService.getAllOperationsByIBAN(iBAN);
		return operationList;
	} // SOAPUI >> http://localhost:8080/GestiBankBackEnd/client/1/comptes/10010001/operations
	
	/**
	 * CRUD -- READ operation
	 * R�cup�ration des operations li�es � un compte filtr�es par date/dur�e 
	 * @param iBAN : repr�sente l'identifiant unique d'un compte
	 * @param dateDeb : correspond � la date minimale de recherche
	 * @param dateFin : correspond � la date maximale de recherche 
	 * @param duree : correspond � la dur�e sur laquelle rechercher
	 * @return : retourne une liste de comptes au format JSON
	 */
//	@GET
//	@Path("/{idClient}/comptes/{iBAN}/operations")
//	@Produces(MediaType.APPLICATION_JSON)
//	public List<Operation> getAllOperationsByIBANWithParams(
//			@PathParam("iBAN") String iBAN, 
//			@QueryParam("dateDeb") Date dateDeb,
//			@QueryParam("dateFin") Date dateFin,
//			@QueryParam("duree") int duree) 
//		{
//		List<Operation> operationList = operationService.getAllOperationsByIBANWithParam(iBAN, dateDeb, dateFin, duree);
//		return operationList;
//	} // SOAPUI >> http://localhost:8080/GestiBankBackEnd/client/1/comptes/10010001/operations
	
	/**
	 * CRUD -- CREATE operation
	 * Ajout(cr�ation) d'une op�ration 
	 * @param demande : requiert une operation au format JSON 
	 * @return : retourne une operation au format JSON
	 */
	@POST
	@Path("/{idClient}/comptes/{IBAN}/operations")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Operation ajouterOperation(Operation operation) {
		Operation operationResponse = operationService.ajoutOperation(operation);
		return operationResponse;
	} // SOAPUI >> http://localhost:8080/GestiBankBackEnd/client/1/comptes/10010001/operations
	
	
	
	
	
	//////////////////////////////////////////////////
	//   GESTION DES DEMANDES CREEES PAR LE CLIENT
	//////////////////////////////////////////////////
	
	/**
	 * CRUD -- CREATE operation
	 * Cr�ation d'une demande de chequier pour un compte donn�
	 * @param demande : requiert une demande au format JSON 
	 * @return : retourne une demande au format JSON
	 */
	@POST
	@Path("/{idClient}/comptes/{IBAN}/demandeChequier")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande envoiDemandeChequier(Demande demande) {
		Demande demandeResponse = demandeService.creerDemande(demande);
		return demandeResponse;
	}
	
	/**
	 * CRUD -- CREATE operation
	 * Cr�ation d'une demande de nouveau compte
	 * @param demande : requiert une demande au format JSON 
	 * @return : retourne une demande au format JSON
	 */
	@POST
	@Path("/{idClient}/demandeNouveauCompte")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande envoiDemandeNouveauCompte(Demande demande) {
		Demande demandeResponse = demandeService.creerDemande(demande);
		return demandeResponse;
	}
	
	/**
	 * CRUD -- CREATE operation
	 * Cr�ation d'une demande de changement de mot de passe
	 * @param demande : requiert une demande au format JSON 
	 * @return : retourne une demande au format JSON
	 */
	@POST
	@Path("/{idClient}/demandeChangementMdp")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande envoiDemandeChgtMdp(Demande demande) {
		Demande demandeResponse = demandeService.creerDemande(demande);
		return demandeResponse;
	}
	
	//////////////////////////////////////////////////
	//   GESTION DES  CLIENTS
	//////////////////////////////////////////////////
	
	// CRUD -- READ operation
		@GET
		@Produces(MediaType.APPLICATION_JSON)
		public List<Client> listAllClients() {
			List<Client> clientList = clientService.getAllClients();
			return clientList;
		}
		
}
