package com.rj.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.rj.gestibank.dao.IOperationDAO;
import com.rj.gestibank.model.Operation;

public class OperationDAOImpl implements IOperationDAO {
	
	static HashMap<Long, Operation> operationsMap = new HashMap<Long, Operation>();
	
	
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
