/**
 * 
 */
package fr.jgj.gestibank.rest.resource;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

import fr.jgj.gestibank.service.impl.CompteServiceImpl;
import fr.jgj.gestibank.service.impl.OperationServiceImpl;

/**
 * @author Jordan
 *
 */
@Path("/test")
public class TestRessource {
	
	
	CompteServiceImpl compteServiceImpl = new CompteServiceImpl();
	OperationServiceImpl operationServiceImpl = new OperationServiceImpl();
	
	
	@GET
	@Path("/recupString")
	@Produces("text/html")
    public Response getResultByPassingString(@QueryParam("message") String message) {
        String output = "Message : "+ message;
        System.out.println(output);
        return Response.status(200).entity(output).build();
    } // >> http://localhost:8080/GestiBankBackEnd/test/recupString?message=Hello
	
	@GET
	@Path("/recupDate2")
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
	// >> http://localhost:8080/GestiBankBackEnd/test/recupDate2?date=2018-02-17

	
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
