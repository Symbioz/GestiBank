package fr.jgj.gestibank.rest.resource;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.format.annotation.DateTimeFormat;

import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.Demande;
import fr.jgj.gestibank.model.Operation;
import fr.jgj.gestibank.service.impl.CompteServiceImpl;
import fr.jgj.gestibank.service.impl.OperationServiceImpl;

@Path("/comptes")
public class CompteRessource {
	
	CompteServiceImpl compteService = new CompteServiceImpl();
	OperationServiceImpl operationService = new OperationServiceImpl();
	
//	// CRUD -- READ operation --> nécessaire ???
//	@GET
//	@Produces(MediaType.APPLICATION_JSON)
//	public List<Compte> listAllComptes() {
//		List<Compte> compteList = compteServiceImpl.getAllComptes();
//		return compteList;
//	}
	
	// CRUD -- READ operation
	@GET
	@Path("/{IBAN}")
	@Produces(MediaType.APPLICATION_JSON)
	public Compte getCompteByIBAN(@PathParam("IBAN") String IBAN) {
		Compte compte = compteService.getCompteByIBAN(IBAN);
		return compte;
	} // SOAPUI >> http://localhost:8080/GestiBankBackEnd/comptes/10010001	
	
	/**
	 * CRUD -- UPDATE operation
	 * Modification d'un compte via son IBAN
	 * @param compte : requiert un compte au format JSON
	 * @return le compte modifié au format JSON
	 */
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Compte modifierCompteByIBAN(Compte compte) {
		Compte compteResponse = compteService.modifierCompte(compte);
		return compteResponse;
	} // SOAPUI >> http://localhost:8080/GestiBankBackEnd/comptes
	
	/**
	 * CRUD -- CREATE operation
	 * Modification d'un compte via son IBAN
	 * @param compte : requiert un compte au format JSON
	 * @return le compte modifié au format JSON
	 */
	@POST
	@Path("/{IBAN}/operations")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Operation ajouterOperation(Operation operation) {
		Operation operationResponse = operationService.ajoutOperation(operation);
		return operationResponse;
	}
	
}
