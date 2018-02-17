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
	
	//
	UtilisateurServiceImpl utilisateurServiceImpl = new UtilisateurServiceImpl();
	CompteServiceImpl compteServiceImpl = new CompteServiceImpl();
	OperationServiceImpl operationServiceImpl = new OperationServiceImpl();
	DemandeServiceImpl demandeServiceImpl = new DemandeServiceImpl();
	
	// CRUD -- READ operation
	// Récupération de la liste des comptes pour un client donné
	@GET
	@Path("/comptes")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Compte> listClientComptes(@PathParam("idClient") long idClient) {
		List<Compte> compteList = compteServiceImpl.getCompteByClient(idClient);
		return compteList;
	} // >> http://localhost:8080/GestiBankBackEnd/client/1/comptes
	
	// CRUD -- READ operation
	// Récupération d'un compte via son iban (parmis les comptes d'un client donné)
	@GET
	@Path("/comptes/{IBAN}")
	@Produces(MediaType.APPLICATION_JSON)
	public Compte getCompteByIBAN(@PathParam("IBAN") String IBAN) {
		Compte compte = compteServiceImpl.getCompteByIBAN(IBAN);
		return compte;
	} // >> http://localhost:8080/GestiBankBackEnd/client/1/comptes/10010001	
		
	// CRUD -- READ operation
	// Récupération des operations liées à un compte donné d'un client donné
	@GET
	@Path("/comptes/{iBAN}/operations")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Operation> getAllOperationsByIBAN(@PathParam("iBAN") String iBAN) {
		List<Operation> operationList = operationServiceImpl.getAllOperationsByIBAN(iBAN);
		return operationList;
	} // >> http://localhost:8080/GestiBankBackEnd/client/1/comptes/10010001/operations
		
	// CRUD -- CREATE operation
	@POST
	@Path("/comptes/{IBAN}/demandeChequier")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande envoiDemandeChequier(Demande demande) {
		Demande demandeResponse = demandeServiceImpl.creerDemande(demande);
		return demandeResponse;
	}
	
	// CRUD -- CREATE operation
	@POST
	@Path("/demandeNouveauCompte")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande envoiDemandeNouveauCompte(Demande demande) {
		Demande demandeResponse = demandeServiceImpl.creerDemande(demande);
		return demandeResponse;
	}
	
	// CRUD -- CREATE operation
	@POST
	@Path("/demandeChangementMdp")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Demande envoiDemandeChgtMdp(Demande demande) {
		Demande demandeResponse = demandeServiceImpl.creerDemande(demande);
		return demandeResponse;
	}
		
		
}
