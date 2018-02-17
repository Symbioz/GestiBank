package fr.jgj.gestibank.rest.resource;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.format.annotation.DateTimeFormat;

import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.Operation;
import fr.jgj.gestibank.service.impl.CompteServiceImpl;
import fr.jgj.gestibank.service.impl.OperationServiceImpl;

//@Path("/comptes")
@Path("/client/{idClient}/comptes")
public class CompteRessource {
	
	CompteServiceImpl compteServiceImpl = new CompteServiceImpl();
	OperationServiceImpl operationServiceImpl = new OperationServiceImpl();
	
	// CRUD -- READ operation
//	@GET
//	@Produces(MediaType.APPLICATION_JSON)
//	public List<Compte> listAllComptes() {
//		List<Compte> compteList = compteServiceImpl.getAllComptes();
//		return compteList;
//	}
	
	// CRUD -- READ operation
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Compte> listClientComptes(@PathParam("idClient") long idClient) {
		List<Compte> compteList = compteServiceImpl.getCompteByClient(idClient);
		return compteList;
	} // >> http://localhost:8080/GestiBankBackEnd/client/1/comptes
		
	// CRUD -- READ operation
	@GET
	@Path("/{IBAN}")
	@Produces(MediaType.APPLICATION_JSON)
	public Compte getCompteByIBAN(@PathParam("IBAN") String IBAN) {
		Compte compte = compteServiceImpl.getCompteByIBAN(IBAN);
		return compte;
	} // >> http://localhost:8080/GestiBankBackEnd/client/1/comptes/10010001	
	
	// CRUD -- READ operation
	@GET
	@Path("/{iBAN}/operations")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Operation> getAllOperationsByIBAN(@PathParam("iBAN") String iBAN) {
		List<Operation> operationList = operationServiceImpl.getAllOperationsByIBAN(iBAN);
		return operationList;
	} // >> http://localhost:8080/GestiBankBackEnd/client/1/comptes/10010001/operations
	
	@GET
	@Path("/testRecupString")
	@Produces("text/html")
    public Response getResultByPassingString(@QueryParam("message") String message) {
        String output = "Message : "+ message;
        System.out.println(output);
        return Response.status(200).entity(output).build();
    } // >> http://localhost:8080/GestiBankBackEnd/comptes/testRecupString?message=Hello
	
	@GET
	@Path("/testRecupDate2")
	@Produces("text/html")
    public Response getResultByPassingDate2(
    		@QueryParam("date") String date) {  
		System.out.println("-- testRecupDate2 --");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	    Date dateObj = null;
		try {
			dateObj = sdf.parse(date);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String output = "Date de debut : " + dateObj;
        System.out.println(output);
        return Response.status(200).entity(output).build();
    } 
	// >> http://localhost:8080/GestiBankBackEnd/comptes/testRecupDate2?date=2018-02-17

	
//	// CRUD -- READ operation
//	@Path("/{iBAN}/operations")
//	@Produces(MediaType.APPLICATION_JSON)
//	public String getOperationsByIbanWithParam(
//		@PathParam("iBAN") String iBAN,
//		@QueryParam("dateDeb") String dateDeb
//		) {
//		List<Operation> operationList = operationServiceImpl.getAllOperationsByIBAN(iBAN);
//		//System.out.println("Parametres date de debut : " + dateDeb);
//		return dateDeb;
//	}
	
	
}
