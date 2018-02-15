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
    	Operation operation1 = new Operation(8011L, 76.56f, new Date("02/01/2018"), "debit", "facture edf");
    	Operation operation2 = new Operation(8015L, 10.00f, new Date("03/01/2018"), "debit", "facture telephone");
    	Operation operation3 = new Operation(8089L, 29.90f, new Date("05/01/2018"), "debit", "facture internet");
    	Operation operation4 = new Operation(8011L, 13.00f, new Date("16/01/2018"), "debit", "remboursement");
    	Operation operation5 = new Operation(8011L, 56.28f, new Date("18/01/2018"), "debit", "assurance");
    	Operation operation6 = new Operation(8011L, 1800f, new Date("26/01/2018"), "credit", "salaire");
    	operationsMap.put(1L, operation1);
    	operationsMap.put(2L, operation2);
    	operationsMap.put(3L, operation3);
    	operationsMap.put(4L, operation4);
    	operationsMap.put(5L, operation5);
    	operationsMap.put(6L, operation6);
        return operationsMap;
    }
	
	@Override
	public List<Operation> getAllOperation() {
		List<Operation> operations = new ArrayList<Operation>(operationsMap.values());
		return operations;
	}

	@Override
	public Operation ajoutOperation(Operation operation) {
		Long id = operation.getId();
		operationsMap.put(id, operation);
		return operationsMap.get(id);
	}

}
