package fr.jgj.gestibank.rest.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.Demande;
import fr.jgj.gestibank.model.Operation;
import fr.jgj.gestibank.service.impl.CompteServiceImpl;
import fr.jgj.gestibank.service.impl.DemandeServiceImpl;
import fr.jgj.gestibank.service.impl.OperationServiceImpl;
import fr.jgj.gestibank.service.impl.UtilisateurServiceImpl;

@Path("/client/{idClient}")
public class ClientRessource {
	
	////////////////////////////
	//   SERVICES
	////////////////////////////
	
	UtilisateurServiceImpl utilisateurServiceImpl = new UtilisateurServiceImpl();
	CompteServiceImpl compteServiceImpl = new CompteServiceImpl();
	OperationServiceImpl operationServiceImpl = new OperationServiceImpl();
	DemandeServiceImpl demandeService = new DemandeServiceImpl();
	
	
	
	////////////////////////////
	//   GESTION DES COMPTES
	////////////////////////////

	/**
	 * CRUD -- READ operation
	 * Récupération de la liste des comptes pour un client donné
	 * @param idClient : permet de filtrer l'ensemble des comptes et de ne récupérer que les comptes associés au client souhaité
	 * @return : retourne une liste de comptes au format JSON
	 */
	@GET
	@Path("/comptes")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Compte> listClientComptes(@PathParam("idClient") long idClient) {
		List<Compte> compteList = compteServiceImpl.getCompteByClient(idClient);
		return compteList;
	} // >> http://localhost:8080/GestiBankBackEnd/client/1/comptes
	
	/**
	 * CRUD -- READ operation
	 * Récupération d'un compte via son iban (à partir de la liste des comptes d'un client donné)
	 * @param IBAN : représente l'identifiant unique d'un compte
	 * @return : retourne un compte au format JSON
	 */
	@GET
	@Path("/comptes/{IBAN}")
	@Produces(MediaType.APPLICATION_JSON)
	public Compte getCompteByIBAN(@PathParam("IBAN") String IBAN) {
		Compte compte = compteServiceImpl.getCompteByIBAN(IBAN);
		return compte;
	} // >> http://localhost:8080/GestiBankBackEnd/client/1/comptes/10010001	
		
	/**
	 * CRUD -- READ operation
	 * Récupération des operations liées à un compte donné
	 * @param iBAN : représente l'identifiant unique d'un compte
	 * @return : retourne une liste de comptes au format JSON
	 */
	@GET
	@Path("/comptes/{iBAN}/operations")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Operation> getAllOperationsByIBAN(@PathParam("iBAN") String iBAN) {
		List<Operation> operationList = operationServiceImpl.getAllOperationsByIBAN(iBAN);
		return operationList;
	} // >> http://localhost:8080/GestiBankBackEnd/client/1/comptes/10010001/operations
	
	
	
	/////////////////////////////////////////////////
	//   GESTION DES DEMANDES CREES PAR LE CLIENT
	/////////////////////////////////////////////////
	
	/**
	 * CRUD -- CREATE operation
	 * Création d'une demande de chequier pour un compte donné
	 * @param demande : requiert une demande au format JSON 
	 * @return : retourne une demande au format JSON
	 */
	@POST
	@Path("/comptes/{IBAN}/demandeChequier")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande envoiDemandeChequier(Demande demande) {
		Demande demandeResponse = demandeService.creerDemande(demande);
		return demandeResponse;
	}
	
	/**
	 * CRUD -- CREATE operation
	 * Création d'une demande de nouveau compte
	 * @param demande : requiert une demande au format JSON 
	 * @return : retourne une demande au format JSON
	 */
	@POST
	@Path("/demandeNouveauCompte")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande envoiDemandeNouveauCompte(Demande demande) {
		Demande demandeResponse = demandeService.creerDemande(demande);
		return demandeResponse;
	}
	
	/**
	 * CRUD -- CREATE operation
	 * Création d'une demande de changement de mot de passe
	 * @param demande : requiert une demande au format JSON 
	 * @return : retourne une demande au format JSON
	 */
	@POST
	@Path("/demandeChangementMdp")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande envoiDemandeChgtMdp(Demande demande) {
		Demande demandeResponse = demandeService.creerDemande(demande);
		return demandeResponse;
	}
		
		
}
