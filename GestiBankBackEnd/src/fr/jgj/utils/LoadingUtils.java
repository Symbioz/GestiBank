package fr.jgj.utils;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.model.Client;
import fr.jgj.gestibank.model.Compte;
import fr.jgj.gestibank.model.CompteCourant;
import fr.jgj.gestibank.model.Notification;
import fr.jgj.gestibank.model.Operation;

public class LoadingUtils {
	

	 public static HashMap<String, Object> dbMap = createMap();
	
	 public static HashMap<String, Object> createMap()
	    {
		 	//instanciation de la HashMap
		 	HashMap<String, Object> dbMap = new HashMap<String, Object>();
		 
		 	//création des opération du compte 10010001
		 	List<Operation> ops = new ArrayList<Operation>();
		 	Operation operation1 = new Operation(1L, 76.56f, new Date("01/02/2018"), "debit", "facture edf", "10010001");
		 	ops.add(operation1);
	    	Operation operation2 = new Operation(2L, 10.00f, new Date("01/03/2018"), "debit", "facture telephone", "10010001");
	    	ops.add(operation2);
	    	Operation operation3 = new Operation(3L, 29.90f, new Date("01/05/2018"), "debit", "facture internet", "10010001");
	    	ops.add(operation3);
	    	Operation operation4 = new Operation(4L, 13.00f, new Date("01/16/2018"), "debit", "remboursement", "10010001");
	    	ops.add(operation4);
	    	Operation operation5 = new Operation(5L, 56.28f, new Date("01/18/2018"), "debit", "assurance", "10010001");
	    	ops.add(operation5);
	    	Operation operation6 = new Operation(6L, 1800f, new Date("01/26/2018"), "credit", "salaire", "10010001");
	    	ops.add(operation6);
	    	
	    	//création du compte 	10010001
	    	List<Compte>cmpts = new ArrayList<Compte>();
	    	CompteCourant  compte1 = new CompteCourant ("10010001", 1, 1000f, new Date("01/01/2001"), new ArrayList<Operation>(), 100f);
	    	compte1.setOperations(ops);
	    	cmpts.add(compte1);
	    	
	    	//création d'un user 
	    	List<Client>cls = new ArrayList<Client>();
	    	Client client1 = new Client(1, "moi","encore moi ", "0000",  "moa@gk.com", "blabla 59000", "symbioz", "truc", 0, "machin", 
	    								new ArrayList<Compte>(), new ArrayList<File>(), new ArrayList<Notification>(), "A001");
	    	client1.getComptes().add(compte1);
	    	cls.add(client1);
	    	
	    	dbMap.put("operationsMock", ops);
	    	dbMap.put("comptesMock", cmpts);
	    	dbMap.put("clientsMock", cls);
	    	
	    	return dbMap;
	    	
	    }
	 
	
	

}
