package fr.jgj.gestibank.service.impl;

import java.util.List;

import fr.jgj.gestibank.dao.impl.OperationDAOImpl;
import fr.jgj.gestibank.model.Operation;
import fr.jgj.gestibank.service.IOperationService;

public class OperationServiceImpl implements IOperationService {

	//à modifier ? spring
	OperationDAOImpl operationDAOImpl = new OperationDAOImpl();
		
	
	@Override
	public List<Operation> getAllOperationsByIBAN(String iBAN) {
		List<Operation> operationList = operationDAOImpl.getAllOperationsByIBAN(iBAN);
		return operationList;
	}

	@Override
	public Operation ajoutOperation(Operation operation) {
		Operation operationResponse = operationDAOImpl.ajoutOperation(operation);
		return operationResponse;
	}

}
