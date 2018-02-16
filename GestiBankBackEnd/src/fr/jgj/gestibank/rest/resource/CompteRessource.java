package fr.jgj.gestibank.rest.resource;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.Operation;
import fr.jgj.gestibank.service.impl.CompteServiceImpl;
import fr.jgj.gestibank.service.impl.OperationServiceImpl;

@Path("/comptes")
public class CompteRessource {
	
	CompteServiceImpl compteServiceImpl = new CompteServiceImpl();
	OperationServiceImpl operationServiceImpl = new OperationServiceImpl();
	
	// CRUD -- READ operation
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Compte> listAllComptes() {
		List<Compte> compteList = compteServiceImpl.getAllComptes();
		return compteList;
	}
		
	// CRUD -- READ operation
	@GET
	@Path("/{IBAN}")
	@Produces(MediaType.APPLICATION_JSON)
	public Compte getCompteByIBAN(@PathParam("IBAN") String IBAN) {
		Compte compte = compteServiceImpl.getCompteByIBAN(IBAN);
		return compte;
	}	
	
	// CRUD -- READ operation
	@GET
	@Path("/{iBAN}/operations")
	//@Path("/{iBAN}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Operation> getAllOperationsByIBAN(@PathParam("iBAN") String iBAN) {
		List<Operation> operationList = operationServiceImpl.getAllOperationsByIBAN(iBAN);
		return operationList;
	}
}
