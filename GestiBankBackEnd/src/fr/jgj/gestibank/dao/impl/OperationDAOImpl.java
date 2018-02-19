package fr.jgj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.dao.IOperationDAO;
import fr.jgj.gestibank.model.Operation;

public class OperationDAOImpl implements IOperationDAO {
	
	//static HashMap<Long, Operation> operationsMap = new HashMap<Long, Operation>();
	
	static HashMap<Long, Operation> operationsMap = createMap();
	
	static HashMap<Long, Operation> createMap()
    {
    	HashMap<Long, Operation> operationsMap = new HashMap<Long, Operation>();
    	Operation operation1 = new Operation(1L, 76.56f, new Date("02/01/2018"), "debit", "facture edf", "10010001");
    	Operation operation2 = new Operation(2L, 10.00f, new Date("03/01/2018"), "debit", "facture telephone", "10010001");
    	Operation operation3 = new Operation(3L, 29.90f, new Date("05/01/2018"), "debit", "facture internet", "10010001");
    	Operation operation4 = new Operation(4L, 13.00f, new Date("16/01/2018"), "debit", "remboursement", "10010001");
    	Operation operation5 = new Operation(5L, 56.28f, new Date("18/01/2018"), "debit", "assurance", "10010001");
    	Operation operation6 = new Operation(6L, 1800f, new Date("26/01/2018"), "credit", "salaire", "10010001");
    	Operation operation7 = new Operation(7L, 65.98f, new Date("01/01/2018"), "debit", "interets", "10010002");
    	Operation operation8 = new Operation(8L, 2500f, new Date("12/02/2018"), "credit", "virement", "10010002");
    	operationsMap.put(1L, operation1);
    	operationsMap.put(2L, operation2);
    	operationsMap.put(3L, operation3);
    	operationsMap.put(4L, operation4);
    	operationsMap.put(5L, operation5);
    	operationsMap.put(6L, operation6);
    	operationsMap.put(7L, operation7);
    	operationsMap.put(8L, operation8);
        return operationsMap;
    }

	
	@Override
	public List<Operation> getAllOperationsByIBAN(String iBAN) {
		//création de la liste filtrée
		List<Operation> operationsByIBAN = new ArrayList<Operation>();
		//pour l'ensemble des opérations en mémoires
		for (Operation operation : operationsMap.values()) {
			//suivant l'identifiant du compte
			if (operation.getiBAN().equals(iBAN)) {
				operationsByIBAN.add(operation);
			}
		}
		return operationsByIBAN;
	}
	
	@Override
	public Operation ajoutOperation(Operation operation) {
		Long id = operation.getId();
		operationsMap.put(id, operation);
		return operationsMap.get(id);
	}

}
